/*This file should not included any script except p/function*/

/*
This function return a 3D array included all block info
@return IBlock[]
*/
function getBoxFromXYZ(e,x0,y0,z0,x1,y1,z1){
    /*
    if(isInteger(x0) && isInteger(y0) && isInteger(z0) && isInteger(x1) && isInteger(y1) && isInteger(z1)){
        throw "arguments 2-7 must be int";
    }*/
    if(arguments.length < 7 || arguments.length > 7) throw "Insufficient parameter length";
    var xRange = Math.abs(x0 - x1);
    var yRange = Math.abs(y0 - y1);
    var zRange = Math.abs(z0 - z1);
    var array = [];
    if(x0>x1) x0 = x0 - xRange;
    if(z0>z1) z0 = z0 - zRange;
    if(y0>y1) y0 = y0 - yRange;
    var yArr = 0,zArr = 0,xArr = 0;
    for (var yBlock = y0; yBlock <= yRange; yBlock++) {
        for (var zBlock = z0; zBlock <= zRange; zBlock++) {
            for (var xBlock = x0; xBlock <= xRange; xBlock++) {
                array[yArr][xArr][zArr] = e.npc.world.getBlock(xBlock, yBlock, zBlock);
                xArr ++;
            }
            zArr ++;
        }
        yArr ++;
    }
    return array;
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
function setBoxFromArrayToXYZ(e,inputArray,x,y,z){
    for(var yBlock = 0,currentY = y;yBlock <= inputArray.length;yBlock++,currentY++){
        for(var zBlock = 0,currentZ = z;zBlock <= inputArray[yBlock].length;zBlock++,currentZ++){
            for(var xBlock = 0,currentX = x;xBlock <= inputArray[yBlock][zBlock].length;xBlock++,currentX++){
                e.npc.world.setBlock(currentY,currentZ,currentX,inputArray[yBlock][zBlock][xBlock].getName(),inputArray[yBlock][zBlock][xBlock].getMetadata());
            }
        }
    }
}
