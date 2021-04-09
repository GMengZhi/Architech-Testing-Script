/*This file should not included any script except p/function*/

/*
This function return a 3D array included all block info
@param 0 must be less than 1
@return IBlock[]
*/
function getBoxFromXYZ(e,x0,y0,z0,x1,y1,z1){
    if(isInteger(x0) && isInteger(y0) && isInteger(z0) && isInteger(x1) && isInteger(y1) && isInteger(z1)){
        throw "arguments 2-7 must be int";
    }
    if(arguments.length < 7 || arguments.length > 7) throw "Insufficient parameter length";
    if(y0>y1) throw "Parameter y0 must be less than y1";
    var xRange = Math.abs(x0 - x1);
    var yRange = Math.abs(y0 - y1);
    var zRange = Math.abs(z0 - z1);
    var array = [];
    for (var yBlock = y0, yArr = 0; yBlock <= yRange; yBlock++ , yArr++) {
        for (var zBlock = z0, zArr = 0; zBlock <= zRange; zBlock++ , zArr++) {
            for (var xBlock = x0, xArr = 0; xBlock <= xRange; xBlock++ , xArr++) {
                array[yArr][xArr][zArr] = e.npc.world.getBlock(xBlock, yBlock, zBlock);
            }
        }
    }
    return array;
}

/*
This function test the input obj
*/
function isInteger(obj) {
    return obj%1 === 0
}

/*
This function save the area block what you input
*/
function saveAreaBlockToTheFile(inputName,inputArray){
    var io = new IONPC();
    io.set("ArchTestingTargetBuildingData" + inputName,{
        name:inputName,
        blockInfoArray:inputArray
    });
}

/*
This function print the area block from the file
@param inputName Is the name you input when you save it
@return An array included the block
*/
function outPutAreaBlockFromTheFile(inputName){
    var io = new IONPC();
    var outputArray = io.get("ArchTestingTargetBuildingData" + inputName).blockInfoArray;
    return outputArray;
}

/*
This function set blocks from the array
*/
function setBoxFromArrayToXYZ(inputArray,x,y,z){
    for(var yBlock = 0,currentY = y;yBlock <= inputArray.length;yBlock++,currentY++){
        for(var zBlock = 0,currentZ = z;zBlock <= inputArray[yBlock].length;zBlock++,currentZ++){
            for(var xBlock = 0,currentX = x;xBlock <= inputArray[yBlock][zBlock].length;xBlock++,currentX++){
                e.npc.world.setBlock(currentY,currentZ,currentX,inputArray[yBlock][zBlock][xBlock].getName(),inputArray[yBlock][zBlock][xBlock].getMetadata());
            }
        }
    }
}
