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
fn neighborCoord(coord: vec2<u32>, index: u32) -> vec2<u32> {
  let idx = ((index % 8) + 8) % 8;  // normalize to 0..7
  let c   = vec2<i32>(coord);
  let n   = c + OFFSETS[idx];

  // Clamp against grid bounds
  let cx = u32(clamp(n.x, 0, i32(uView.size.x) - 1));
  let cy = u32(clamp(n.y, 0, i32(uView.size.y) - 1));

  return vec2<u32>(cx, cy);
}

fn getFurtureCellFAmount(coord: vec2<u32>) -> f32
{
	let cellValue = cellFAmount(coord);
	let cellHeight = cellHeight(coord);
	var futureCellValue = cellValue;		
	
	futureCellValue += getFlowChange(coord);
	//futureCellValue += GetInteractionChange(coord.xy);
	//futureCellValue += GetEmissionChange(coord.xy);
	
    
	futureCellValue = clamp(futureCellValue, 0, uTerrain.maxCellValue - cellHeight);
	//futureCellValue = clamp(futureCellValue, -maxCellValue + cellHeight, maxCellValue - cellHeight);
	
	return futureCellValue;

}

fn highestNeighborIndex(coord: vec2<u32>) -> u32
{
	var index : u32 = 0;
	var nCoord = vec2<u32>(0, 0);
	var nValue : f32 = -1.0;
	var maxValue : f32 = -1.0;
	var j : u32 = 0;
	
    // cycle index? this steps index [0-8]
    var cycleIndex : u32 = 0;

    // get random starting index based on randomDirectionsBuffer values
	var cIndex : u32 = 0;//(cycleIndex + randomDirectionsBuffer[idx(coord)]) % 8;
	
	for (var i : u32 = 0; i < 8; i += 1)
	{
		j = (i + cIndex) % 8;
		nCoord = neighborCoord(coord, j);
		
		if (!inBounds(nCoord.x, nCoord.y)) { continue; }
		
		nValue = roundedCombinedCellHeight(nCoord); //CellValue(nCoord);
		
		if (index < 0 || nValue > maxValue)
		{
			index = j;
			maxValue = nValue;
		}
	}
	
	return index;
}

fn getFlowChange(coord: vec2<u32>) -> f32
{
	// if (cellMovementMultiplier <= 0)
	// {
	// 	return 0;
	// }
	
    let cellValue = cellFAmount(coord);
	let cellHeight = roundedCellHeight(coord);
	let combinedCellValue = cellValue + cellHeight;
	var futureCellValue = cellValue;
	
	var nCoord = vec2<u32>(0, 0);
	var nValue : f32 = 0.0;
    var nCombinedValue : f32 = 0.0;
    var nHeight : f32 = 0.0;
	var oppositeIndex : u32 = 0;
	var lowestIndex: u32 = 0;
    var highestIndex: u32 = 0;
		
	var change : f32 = 0.0;
	
	var checkNeighors : bool = false;	
	var requiredNeighbors : f32 = 0.0;
	var requiredRadius :u32 = 1;
	
	var isAnti : bool= cellValue < 0;
	var nIsAnti : bool = false;
	
	var clampToOne : bool = true;
	var movementDivsor : f32 = 2.0f;
	
	var minSpreadAmount : f32 = 1.0;

    var maxCellValue = uTerrain.maxCellValue;
	
	//Should this cell increase due to flow from a neighbor
	if (combinedCellValue < maxCellValue)
	{
		//Get this cells highest neighbor
		highestIndex = highestNeighborIndex(coord.xy);
		// nCoord = NeighborCoord(coord.xy, highestIndex);
		
		// //If neighbor is in bounds
		// if (InBounds(nCoord) && (requiredNeighbors <= 0 || DirectNeighorCount(nCoord) >= requiredNeighbors))
		// {
		// 	nValue = CellValue(nCoord);
		// 	nCombinedValue = CombinedCellHeight(nCoord);
		// 	nIsAnti = nValue < 0;						
			
		// 	//If the neigbor has more than the min amount and the combined height of the neighbor cell is higher
		// 	if ((cellValue != 0 || abs(nValue) > minSpreadAmount) && abs(nValue) > minMoveAmount && nCombinedValue >= combinedCellValue)
		// 	{
		// 		//Get the lowest index of the neighbor
		// 		oppositeIndex = (highestIndex + 4) % 8;
		// 		lowestIndex = LowestNeighborIndex(nCoord);
				
		// 		//if the lowestIndex equals the opposite, meaning that the two cells are paired
		// 		if (lowestIndex == oppositeIndex)
		// 		{
		// 			int m = maxCellValue - combinedCellValue;
		// 			int n = floor((nCombinedValue - combinedCellValue) / movementDivsor * cellMovementMultiplier);
		// 			n = min(abs(nValue), n);
		// 			//increase cell by up to half of the difference in amounts
		// 			change += clamp(n, clampToOne ? 1 : 0, m) * nIsAnti ? -1 : 1;
		// 			//change++;

		// 		}

		// 	}

		// }

	}

	// //Should this cell decrease due to flow to a neighbor
	// if (abs(cellValue) > minMoveAmount && (requiredNeighbors <= 0 || DirectNeighorCount(coord.xy) >= requiredNeighbors))
	// {
	// 	//Get this cells lowest neighbor
	// 	lowestIndex = LowestNeighborIndex(coord.xy);
	// 	nCoord = NeighborCoord(coord.xy, lowestIndex);
		
	// 	//If neighbor is in bounds
	// 	if (InBounds(nCoord))
	// 	{
	// 		nValue = CellValue(nCoord);
	// 		nCombinedValue = CombinedCellHeight(nCoord);
			
	// 		//If the neigbor has less than the max amount and the combined height of the neighbor cell is lower
	// 		if ((nValue != 0 || abs(cellValue) > minSpreadAmount) && nCombinedValue < maxCellValue && nCombinedValue <= combinedCellValue)
	// 		{
	// 			//Get the highest index of the neighbor
	// 			oppositeIndex = (lowestIndex + 4) % 8;
	// 			highestIndex = HighestNeighborIndex(nCoord);
	// 			nHeight = CellHeight(nCoord);
				
	// 			//if the highestIndex equals the opposite, meaning that the two cells are paired
	// 			if (highestIndex == oppositeIndex)
	// 			{
	// 				//Get the remaining space in the cell
	// 				int m = maxCellValue - nCombinedValue;
	// 				//Get half of the difference in the cells
	// 				int n = floor((combinedCellValue - nCombinedValue) / movementDivsor * cellMovementMultiplier);
	// 				//If the half is bigger than the value clamp
	// 				n = min(abs(cellValue), n);
					
	// 				//decrease cell by up to half of the difference in amounts
	// 				change -= clamp(n, clampToOne ? 1 : 0, m) * isAnti ? -1 : 1;
	// 				//change--;
	// 			}

	// 		}

	// 	}

	// }
	
	// return change;

    return futureCellValue;
}