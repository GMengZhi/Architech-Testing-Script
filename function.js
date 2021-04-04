/*This file should not included any script except p/function*/

/*
This function return a 3Darray included all block info
@alarm y0 must be less than y1
*/
function getBlockesFromXYZ(e,x0,y0,z0,x1,y1,z1){
    if(isInteger(x0) && isInteger(y0) && isInteger(z0) && isInteger(x1) && isInteger(y1) && isInteger(z1)){
        throw "arguments 2-7 must be int";
    }
    if(arguments.length < 7 || arguments.length > 7) throw "Insufficient parameter length";
    if(y0>y1) throw "Parameter y0 must be less than y1";
    var xrange = Math.abs(x0-x1);
    var yrange = Math.abs(y0-y1);
    var zrange = Math.abs(z0-z1);
    var array;
    if(x0<x1){
        if(z0<z1){
            for(var zblock = z0 ,zarr = 0; zblock <= zrange ; zblock++ ,zarr++){
                for(var yblock = y0 ,yarr = 0; yblock <= yrange ; yblock++ ,yarr++){
                    for(var xblock = x0 ,xarr = 0; xblock <= xrange ; xblock++ ,xarr++){
                        array[xarr][yarr][zarr] = e.npc.world.getBlock(xblock,yblock,zblock);
                    }
                }
            }
            return array;
        }else{
            for(var zblock = z0 ,zarr = 0; zblock >= 0 ; zblock++ ,zarr--){
                for(var yblock = y0 ,yarr = 0; yblock <= yrange ; yblock++ ,yarr++){
                    for(var xblock = x0 ,xarr = 0; xblock <= xrange ; xblock++ ,xarr++){
                        array[xarr][yarr][zarr] = e.npc.world.getBlock(xblock,yblock,zblock);
                    }
                }
            }
            return array;
        }
    }else{
        if(z0<z1){
            for(var zblock = z0 ,zarr = 0; zblock <= zrange ; zblock++ ,zarr++){
                for(var yblock = y0 ,yarr = 0; yblock <= yrange ; yblock++ ,yarr++){
                    for(var xblock = x0 ,xarr = 0; xblock >= 0 ; xblock++ ,xarr--){
                        array[xarr][yarr][zarr] = e.npc.world.getBlock(xblock,yblock,zblock);
                    }
                }
            }
            return array;
        }else{
            for(var zblock = z0 ,zarr = 0; zblock >= 0 ; zblock++ ,zarr--){
                for(var yblock = y0 ,yarr = 0; yblock <= yrange ; yblock++ ,yarr++){
                    for(var xblock = x0 ,xarr = 0; xblock >= 0 ; xblock++ ,xarr--){
                        array[xarr][yarr][zarr] = e.npc.world.getBlock(xblock,yblock,zblock);
                    }
                }
            }
            return array;
        }
    }
}

function isInteger(obj) {
    return obj%1 === 0
}

/*
This function save the area block what you input
*/
function saveAreaBlockToTheFile(inputName,inputArray){
    var io = new IONPC();
    io.set("ArchTestingTargetBuildingData",{
        name:inputName,
        blockInfoArray:inputArray
    });
}