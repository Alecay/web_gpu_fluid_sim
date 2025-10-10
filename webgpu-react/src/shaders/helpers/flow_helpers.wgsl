// 8-neighborhood offsets (Up, Up-Right, Right, Right-Down, Down, Down-Left, Left, Left-Up)
const OFFSETS : array<vec2<i32>, 8> = array<vec2<i32>, 8>(
  vec2<i32>(0,  1),  // 0: Up
  vec2<i32>(1,  1),  // 1: Up-Right
  vec2<i32>(1,  0),  // 2: Right
  vec2<i32>(1, -1),  // 3: Right-Down
  vec2<i32>(0, -1),  // 4: Down
  vec2<i32>(-1,-1),  // 5: Down-Left
  vec2<i32>(-1, 0),  // 6: Left
  vec2<i32>(-1, 1)   // 7: Left-Up
);

// Basic neighbor (signed coords). The caller should handle bounds.
// Safe neighbor coord: clamps into [0, size-1]
fn neighborCoord(coord: vec2<i32>, index: u32) -> vec2<i32> {
  let idx = ((index % 8) + 8) % 8;  // normalize to 0..7
  let c   = vec2<i32>(coord);
  let n   = c + OFFSETS[idx];
  return n;
}

fn getFurtureCellFAmount(coord: vec2<u32>) -> f32
{
	let cellValue = cellFAmount(coord);
	let cellH = cellHeight(coord);
	var futureCellValue = cellValue;
	let maxCellValue : f32 = f32(uTerrain.maxCellValue) * 2.0;
	
	futureCellValue += getFlowChange(coord);
	//futureCellValue += GetInteractionChange(coord.xy);
	//futureCellValue += GetEmissionChange(coord.xy);
	
    
	// futureCellValue = clamp(futureCellValue, 0, uTerrain.maxCellValue - cellH);
	futureCellValue = clamp(futureCellValue, -maxCellValue + cellH, maxCellValue - cellH);
	
	return futureCellValue;

}

fn highestNeighborIndex(coord: vec2<i32>) -> u32
{
	var index : u32 = 0;
	var nCoord = vec2<i32>(0, 0);
	var nValue : f32 = -1.0;
	var maxValue : f32 = -1.0;
	var j : u32 = 0;
	
	let cell = currentCells[idx(u32(coord.x), u32(coord.y))];

	// using an odd multiplier (3, 5, or 7 all work). 3 is a good default.
	let cycleIndex : u32 = (uSim.simIndex * 3u) % 8u;

	// keep your existing per-cell offset
	let baseOffset : u32 = u32(cell.randDir) % 8u;

	// final start index
	let cIndex     : u32 = (cycleIndex + baseOffset) % 8u;
	
	for (var i : u32 = 0; i < 8; i += 1)
	{
		j = (i + cIndex) % 8;
		nCoord = neighborCoord(coord, j);
		
		if (!inBoundsV2I(nCoord)) { continue; }
		
		nValue = roundedCombinedCellHeight(vec2<u32>(nCoord)); //CellValue(nCoord);
		
		if (index < 0 || nValue > maxValue || i == 0)
		{
			index = j;
			maxValue = nValue;
		}
	}
	
	return index;
}

fn lowestNeighborIndex(coord: vec2<i32>) -> u32
{
	var index : u32 = 0;
	var nCoord = vec2<i32>(0, 0);
	var nValue : f32 = -1.0;
	var minValue : f32 = -1.0;
	var j : u32 = 0;
	
	let cell = currentCells[idx(u32(coord.x), u32(coord.y))];

	// using an odd multiplier (3, 5, or 7 all work). 3 is a good default.
	let cycleIndex : u32 = (uSim.simIndex * 3u) % 8u;

	// keep your existing per-cell offset
	let baseOffset : u32 = u32(cell.randDir) % 8u;

	// final start index
	let cIndex     : u32 = (cycleIndex + baseOffset) % 8u;
	
	for (var i : u32 = 0; i < 8; i += 1)
	{
		j = (i + cIndex) % 8;
		nCoord = neighborCoord(coord, j);
		
		if (!inBoundsV2I(nCoord)) { continue; }
		
		nValue = roundedCombinedCellHeight(vec2<u32>(nCoord)); //CellValue(nCoord);
		
		if (index < 0 || nValue < minValue || i == 0)
		{
			index = j;
			minValue = nValue;
		}
	}
	
	return index;
}

fn directNeighorCount(coord : vec2<i32>) -> u32
{
	var count : u32 = 0;
	var cellValue = cellFAmount(vec2<u32>(coord));
	var isAnti : bool = cellValue < 0;
	var nCoord : vec2<i32> = vec2<i32>(0, 0);
	var nValue : f32 = 0.0;
	
	for (var i : u32 = 0; i < 8; i += 1)
	{
		nCoord = neighborCoord(coord, i);
		
		if (!inBoundsV2I(nCoord)) { continue; }
				
		nValue = cellFAmount(vec2<u32>(nCoord));
		
		if(nValue == 0) { continue; }
		
		if ((cellValue != 0) && (isAnti != (nValue < 0))) { continue; }
		
		count++;
	}
	
	return count;
}

fn getFlowChange(coord: vec2<u32>) -> f32
{
	// if (cellMovementMultiplier <= 0)
	// {
	// 	return 0;
	// }
	
	var currentCoord = vec2<i32>(coord);
    let cellValue = cellFAmount(coord);
	let cellH = roundedCellHeight(coord);
	let combinedCellValue = roundedCombinedCellHeight(coord);
	var futureCellValue = cellValue;
	
	var nCoord = vec2<i32>(0, 0);
	var nValue : f32 = 0.0;
    var nCombinedValue : f32 = 0.0;
    var nHeight : f32 = 0.0;
	var oppositeIndex : u32 = 0;
	var lowestIndex: u32 = 0;
    var highestIndex: u32 = 0;
		
	var change : f32 = 0.0;
	
	var checkNeighors : bool = false;	
	var requiredNeighbors : u32 = 0;
	var requiredRadius :u32 = 1;
	
	var isAnti : bool = cellValue < 0;
	var nIsAnti : bool = false;
	
	var clampToOne : bool = false;
	var movementDivsor : f32 = 2.0;
	
	var minSpreadAmount : f32 = 1.0;
	var minMoveAmount : f32 = 0.1;
	var cellMovementMultiplier : f32 = 1.0;

    var maxCellValue = uTerrain.maxCellValue * 2;
	
	//Should this cell increase due to flow from a neighbor
	if (combinedCellValue < maxCellValue)
	{
		//Get this cells highest neighbor
		highestIndex = highestNeighborIndex(currentCoord);
		nCoord = neighborCoord(currentCoord, highestIndex);
		
		//If neighbor is in bounds
		if (inBoundsV2I(nCoord) && ((requiredNeighbors <= 0) || (directNeighorCount(nCoord) >= requiredNeighbors)))
		{
			nValue = cellFAmount(vec2<u32>(nCoord));
			nCombinedValue = roundedCombinedCellHeight(vec2<u32>(nCoord));
			nIsAnti = nValue < 0;						
			
			//If the neigbor has more than the min amount and the combined height of the neighbor cell is higher
			if (((cellValue != 0) || (abs(nValue) > minSpreadAmount)) && (abs(nValue) > minMoveAmount) && (nCombinedValue >= combinedCellValue))
			{
				//Get the lowest index of the neighbor
				oppositeIndex = (highestIndex + 4) % 8;
				lowestIndex = lowestNeighborIndex(nCoord);
				
				//if the lowestIndex equals the opposite, meaning that the two cells are paired
				if (lowestIndex == oppositeIndex)
				{
					let m = maxCellValue - combinedCellValue;
					var n = ((nCombinedValue - combinedCellValue) / movementDivsor * cellMovementMultiplier);
					n = min(abs(nValue), n);
					//increase cell by up to half of the difference in amounts
					let lower = f32(select(0, 1, clampToOne));
					let sign  = f32(select(1, -1, nIsAnti));
					change += clamp(n, lower, m) * sign;
				}

			}

		}

	}

	//Should this cell decrease due to flow to a neighbor
	if (abs(cellValue) > minMoveAmount && (requiredNeighbors <= 0 || directNeighorCount(currentCoord) >= requiredNeighbors))
	{
		//Get this cells lowest neighbor
		lowestIndex = lowestNeighborIndex(currentCoord);
		nCoord = neighborCoord(currentCoord, lowestIndex);
		
		//If neighbor is in bounds
		if (inBoundsV2I(nCoord))
		{
			nValue = cellFAmount(vec2<u32>(nCoord));
			nCombinedValue = roundedCombinedCellHeight(vec2<u32>(nCoord));
			
			//If the neigbor has less than the max amount and the combined height of the neighbor cell is lower
			if ((nValue != 0 || abs(cellValue) > minSpreadAmount) && nCombinedValue < maxCellValue && nCombinedValue <= combinedCellValue)
			{
				//Get the highest index of the neighbor
				oppositeIndex = (lowestIndex + 4) % 8;
				highestIndex = highestNeighborIndex(nCoord);
				nHeight = cellHeight(vec2<u32>(nCoord));
				
				//if the highestIndex equals the opposite, meaning that the two cells are paired
				if (highestIndex == oppositeIndex)
				{
					//Get the remaining space in the cell
					let m = maxCellValue - nCombinedValue;
					//Get half of the difference in the cells
					var n = ((combinedCellValue - nCombinedValue) / movementDivsor * cellMovementMultiplier);
					//If the half is bigger than the value clamp
					n = min(abs(cellValue), n);
					
					//decrease cell by up to half of the difference in amounts
					let lower = f32(select(0, 1, clampToOne));
					let sign  = f32(select(1, -1, isAnti));
					change -= clamp(n, lower, m) * sign;
					//change--;
				}

			}

		}

	}
	
	return change;
}