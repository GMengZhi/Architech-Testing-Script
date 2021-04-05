/*This file should not included any script except p/function*/

/*
This function return a 3D array included all block info
@param y0 must be less than y1
*/
function getBlockesFromXYZ(e,x0,y0,z0,x1,y1,z1){
    if(isInteger(x0) && isInteger(y0) && isInteger(z0) && isInteger(x1) && isInteger(y1) && isInteger(z1)){
        throw "arguments 2-7 must be int";
    }
    if(arguments.length < 7 || arguments.length > 7) throw "Insufficient parameter length";
    if(y0>y1) throw "Parameter y0 must be less than y1";
    const xRange = Math.abs(x0 - x1);
    const yRange = Math.abs(y0 - y1);
    const zRange = Math.abs(z0 - z1);
    let array = [];
    if (x0 >= x1) {
        if (z0 >= z1) {
            for (let zBlock = z0, zArr = 0; zBlock >= 0; zBlock++ , zArr--) {
                for (let yBlock = y0, yArr = 0; yBlock <= yRange; yBlock++ , yArr++) {
                    for (let xBlock = x0, xArr = 0; xBlock >= 0; xBlock++ , xArr--) {
                        array[xArr][yArr][zArr] = e.npc.world.getBlock(xBlock, yBlock, zBlock);
                    }
                }
            }
            return array;
        } else {
            for (let zBlock = z0, zArr = 0; zBlock <= zRange; zBlock++ , zArr++) {
                for (let yBlock = y0, yArr = 0; yBlock <= yRange; yBlock++ , yArr++) {
                    for (let xBlock = x0, xArr = 0; xBlock >= 0; xBlock++ , xArr--) {
                        array[xArr][yArr][zArr] = e.npc.world.getBlock(xBlock, yBlock, zBlock);
                    }
                }
            }
            return array;
        }
    } else {
        if (z0 < z1) {
            for (let zBlock = z0, zArr = 0; zBlock <= zRange; zBlock++ , zArr++) {
                for (let yBlock = y0, yArr = 0; yBlock <= yRange; yBlock++ , yArr++) {
                    for (let xBlock = x0, xArr = 0; xBlock <= xRange; xBlock++ , xArr++) {
                        array[xArr][yArr][zArr] = e.npc.world.getBlock(xBlock, yBlock, zBlock);
                    }
                }
            }
            return array;
        } else {
            for (let zBlock = z0, zArr = 0; zBlock >= 0; zBlock++ , zArr--) {
                for (let yBlock = y0, yArr = 0; yBlock <= yRange; yBlock++ , yArr++) {
                    for (let xBlock = x0, xArr = 0; xBlock <= xRange; xBlock++ , xArr++) {
                        array[xArr][yArr][zArr] = e.npc.world.getBlock(xBlock, yBlock, zBlock);
                    }
                }
            }
        }
        return array;
    }
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
    const io = new IONPC();
    io.set("ArchTestingTargetBuildingData",{
        name:inputName,
        blockInfoArray:inputArray
    });
}