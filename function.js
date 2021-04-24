/*This file should not included any script except p/function*/

/**
 * This function return a 3D array included all block info
 * @return IBlock[]
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
    var arrayY = new Array();
    var arrayZ = new Array();
    var arrayX = new Array();
    if(x0>x1) x0 = x0 - xRange;
    if(z0>z1) z0 = z0 - zRange;
    if(y0>y1) y0 = y0 - yRange;
    for (var yBlock = y0; yBlock <= yRange; yBlock++) {
        for (var zBlock = z0; zBlock <= zRange; zBlock++) {
            for (var xBlock = x0; xBlock <= xRange; xBlock++) {
                arrayX.push(e.npc.world.getBlock(xBlock, yBlock, zBlock));
            }
            arrayZ.push(arrayX);
            arrayX = [];
        }
        arrayY.push(arrayZ);
        arrayZ = [];
    }
    return arrayY;
}

/** This function async the function
 *
 */
function asyncGetBoxFromXYZ(e,x0,y0,z0,x1,y1,z1){
    if(arguments.length < 7 || arguments.length > 7) throw "Insufficient parameter length";
    var xRange = Math.abs(x0 - x1);
    var yRange = Math.abs(y0 - y1);
    var zRange = Math.abs(z0 - z1);
    if(x0>x1) x0 = x0 - xRange;
    if(z0>z1) z0 = z0 - zRange;
    if(y0>y1) y0 = y0 - yRange;
    if(yRange>20) {
        e.npc.say("开始准备Y轴...");
        var cutLoopY = yRange / (yRange % 20);
        for(var i = 1;i <= cutLoopY;i++){
            setTimeout(asyncGetBoxFromXYZ(e,x0,y0 + (i-1) * 20,z0,x0,y1 + i * 20,z1),0);
        }
    }else if(xRange>20) {
        e.npc.say("Y轴准备完成");
        e.npc.say("开始准备X轴...");
        var cutLoopX = xRange / (xRange % 20);
        for(var i = 1;i <= cutLoopX;i++){
            setTimeout(asyncGetBoxFromXYZ(e,x0 + (i-1) * 20,y0,z0,x0 + i * 20,y1,z1),0);
        }
    }else if(zRange>20){
        e.npc.say("X轴准备完成");
        e.npc.say("开始准备Z轴...");
        var cutLoopZ = zRange / (zRange % 20);
        for(var i = 1;i <= cutLoopZ;i++){
            setTimeout(asyncGetBoxFromXYZ(e,x0,y0,z0 + (i-1) * 20,x0,y1,z1 + i * 20),0);
        }
    }else{
        e.npc.say("Z轴准备完成");
        e.npc.say("开始获取区域");
        var tempData = getBoxFromXYZ(e,x0,y0,z0,x1,y1,z1);
        e.player.tempdata.put("Box", tempData);
    }
}

/**
This function save the area block what you input
*/
function saveAreaBlockToTheFile(e,inputName,inputArray){
    var io = new IONPC();
    e.npc.say("开始写入文件...");
    io.set("ArchTestingTargetBuildingData" + inputName,{
        name:inputName,
        blockInfoArray:inputArray
    });

}

/**
This function print the area block from the file
@param inputName Is the name you input when you save it
@return An array included the block
*/
function outPutAreaBlockFromTheFile(inputName){
    var io = new IONPC();
    var outputArray = io.get("ArchTestingTargetBuildingData" + inputName).blockInfoArray;
    return outputArray;
}

/**
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

/**
This function set the area to the training area
@param pos The block pos in the chunk
@param size The area size 1,2,3
*/
function setChunkToTrainingArea(e,pos,size){
    var areaX0 = pos.getX() - pos.getX() % 16;
    var areaZ0 = pos.getZ() - pos.getZ() % 16;
    var areaY = pos.getY();
    var areaX1 = areaX0 + 16*size;
    var areaZ1 = areaZ0 + 16*size;
    new Promise()
}