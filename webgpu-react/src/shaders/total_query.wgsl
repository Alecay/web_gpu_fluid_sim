@compute @workgroup_size(1, 1, 1)
fn total_query(@builtin(global_invocation_id) gid : vec3<u32>) {
    if(gid.x > 0) { return; }

    let cellCount : u32 =  uView.size.x * uView.size.y;
    var fluidTotal : f32 = 0.0;
    var anitFluidTotal : f32 = 0.0;
    for(var i : u32 = 0; i < cellCount; i++)
    {
        if(currentCells[i].fAmount > 0)
        {
            fluidTotal += currentCells[i].fAmount;
        }
        else
        {
            anitFluidTotal -= currentCells[i].fAmount;
        }
    }

    cursorQuery.fluidTotal = fluidTotal;
    cursorQuery.anitFluidTotal = anitFluidTotal;
}
