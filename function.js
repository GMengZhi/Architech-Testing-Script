/*This file should not included any script except p/function*/

/**
 This function save the area block what you input
 */
function saveAreaDataToTheFile(e, inputName, inputX, inputY, inputZ) {
    var io = new IONPC();
    e.npc.say("开始写入文件...");
    io.set("ArchTestingTargetBuildingData" + inputName, {
        name: inputName,
        blockX: inputX,
        blockY: inputY,
        blockZ: inputZ
    });
    e.npc.say("写入完成");

}

/**
 This function print the area block from the file
 @param inputName Is the name you input when you save it
 @return An array included the block
 */
function outPutAreaDataFromTheFile(inputName, type) {
    var io = new IONPC();
    if (type == "x") var output = io.get("ArchTestingTargetBuildingData" + inputName).blockX
    if (type == "y") var output = io.get("ArchTestingTargetBuildingData" + inputName).blockY
    if (type == "z") var output = io.get("ArchTestingTargetBuildingData" + inputName).blockZ
    return output;
}

/**
 对比区块
 @return boolean
 @author yujin
 */
function asyncBox(e, x, y, z, dx, dy, dz, name, space) {
    e.npc.say("项目开始")
    putBlock(ex, y, z, dx, dy, dz, space)
    var xsBlock = outPutAreaDataFromTheFile("ArchTestingTargetBuildingData" + name, x)
    var ysBlock = outPutAreaDataFromTheFile("ArchTestingTargetBuildingData" + name, y)
    var zsBlock = outPutAreaDataFromTheFile("ArchTestingTargetBuildingData" + name, z)
    e.player.tempdata.put("xsBlock", xs)
    e.player.tempdata.put("ysBlock", ys)
    e.player.tempdata.put("zsBlock", zs)
    setTimeout(function () {
        if (BlockNote(e) == BlockLiquid(e)) {
            return true
            e.npc.say("检测完毕,没有异常")
            e.npc.say("清除赛场,开始完善")
            removesBlock(e)
        } else {
            return false
            e.npc.say("异常出现,不合格!")
            e.npc.say("清除赛场")
            removesBlock(e)
        }
    }, 15000)
}

/**获取区块内方块
 * @returns string
 * @constructor
 * @author yujin
 */
function BlockNote(e) {
    var xBlock = e.player.tempdata.get("xBlock")
    var yBlock = e.player.tempdata.get("yBlock")
    var zBlock = e.player.tempdata.get("zBlock")
    for (var x = 0; x < xBlock.length; x++) {
        for (var y = 0; y < yBlock.length; y++) {
            for (var z = 0; z < zBlock.length; z++) {
                return e.world.getBlock(xBlock[x], yBlock[y], zBlock[z]).getName()
            }
        }
    }
}

/**获取对照组方块数据
 * @returns string
 * @constructor
 * @author yujin
 */
function BlockLiquid(e) {
    var xsBlock = e.player.tempdata.get("xsBlock")
    var ysBlock = e.player.tempdata.get("ysBlock")
    var zsBlock = e.player.tempdata.get("zsBlock")
    for (var xs = 0; x < xsBlock.length; x++) {
        for (var ys = 0; y < ysBlock.length; y++) {
            for (var zs = 0; z < zsBlock.length; z++) {
                return e.world.getBlock(xsBlock[xs], ysBlock[ys], zsBlock[zs]).getName()
            }
        }
    }
}

/**删除区块内方块
 * @author yujin
 */
function removesBlock(e) {
    var xsBlock = e.player.tempdata.get("xsBlock")
    var ysBlock = e.player.tempdata.get("ysBlock")
    var zsBlock = e.player.tempdata.get("zsBlock")
    for (var x = 0; x < xsBlock.length; x++) {
        for (var y = 0; y < ysBlock.length; y++) {
            for (var z = 0; z < zsBlock.length; z++) {
                e.world.removeBlock(xsBlock[x], ysBlock[y], zsBlock[z])
            }
        }
    }
}

/**临时存储获取到的方块数据
 * @description 提供两组坐标 类似于创世神选择两点
 * @param space 执行间隔
 * @author yujin
 */
function putBlock(e, x, y, z, dx, dy, dz, space) {
    setTimeout(function () {
        var x = GetBlock(x, y, z, dx, dy, dz, space, "x")
        var y = GetBlock(x, y, z, dx, dy, dz, space, "y")
        var z = GetBlock(x, y, z, dx, dy, dz, space, "z")
        e.player.tempdata.put("xBlock", x)
        e.player.tempdata.put("yBlock", y)
        e.player.tempdata.put("zBlock", z)
        e.npc.say("原区域收集完毕")
    }, 5000)
}

/**
储存 需要对比的玩家的区块
跟创世神/t一样原理的标记
标记一:xs,ys,zs
标记二:dxs,dys,dzs
space:间隔
 * @author yujin
*/
function putPlayersBlock(e, xs, ys, zs, dxs, dys, dzs, space) {
    setTimeout(function () {
        var xs = GetBlock(xs, ys, zs, dxs, dys, dzs, space, "x")
        var ys = GetBlock(xs, ys, zs, dxs, dys, dzs, space, "y")
        var zs = GetBlock(xs, ys, zs, dxs, dys, dzs, space, "z")
        e.player.tempdata.put("xsBlock", xs)
        e.player.tempdata.put("ysBlock", ys)
        e.player.tempdata.put("zsBlock", zs)
        e.npc.say("玩家区域收集完毕")
    }, 5000)
}

/**多线程延迟执行
 *
 * @param fn 需提供一个待执行函数
 * @param millis 毫秒
 * @param thisobject
 * @param args
 * @author yujin
 */
function setTimeout(fn, millis, thisobject, args) {
    var Thread = Java.type("java.lang.Thread");
    var thisobject;
    var args;
    var MyRun = Java.extend(Java.type("java.lang.Runnable"), {
        run: function () {
            Thread.sleep(millis)
            try {
                fn.apply(thisobject, args);
            } catch (err) {
                throw err;
            }
        }
    });
    var run = new MyRun();
    thisobject = (thisobject == null) ? run : thisobject;
    args = (args == null) ? [] : args;
    new Thread(run).start();
}

function GetBlock(x, y, z, dx, dy, dz, space, project) {
    /*
    *double x:发起的x坐标
    *double y:发起的y坐标
    *double z:发起的z坐标
    *double dx:目标的x坐标
    *double dy:目标的y坐标
    *double dz:目标的z坐标
    *double space:间隔
    */
    var posList = {"x": [], "y": [], "z": []}, nx = x, ny = y, nz = z
    var space = (space == null) ? 0.2 : space
    var num1 = (Math.abs(dx - x) + Math.abs(dy - y) + Math.abs(dz - z))
    var xl = ((Math.abs(dx - x)) / num1), yl = ((Math.abs(dy - y)) / num1), zl = ((Math.abs(dz - z)) / num1)
    var l = (Math.abs(dx - x) / (space * xl) > Math.abs(dy - y) / (space * yl)) ? ((Math.abs(dx - x) / (space * xl) > Math.abs(dz - z) / (space * zl)) ? Math.abs(dx - x) / (space * xl) : Math.abs(dz - z) / (space * zl)) : ((Math.abs(dy - y) / (space * yl) > Math.abs(dz - z) / (space * zl)) ? Math.abs(dy - y) / (space * yl) : Math.abs(dz - z) / (space * zl));
//(i<((Math.abs(dx-x))/(space*((Math.abs(dx-x))/(Math.abs(dx-x)+Math.abs(dy-y)+Math.abs(dz-z)))))||i<((Math.abs(dy-y))/(space*((Math.abs(dy-y))/(Math.abs(dx-x)+Math.abs(dy-y)+Math.abs(dz-z)))))||i<((Math.abs(dz-z))/(space*((Math.abs(dz-z))/(Math.abs(dx-x)+Math.abs(dy-y)+Math.abs(dz-z))))))
    for (var i = 0; i < l; i++) {
        var nx = nx + (space * ((dx - x) / num1)), ny = ny + (space * ((dy - y) / num1)),
            nz = nz + (space * ((dz - z) / num1))
        posList.x[i] = nx;
        posList.y[i] = ny;
        posList.z[i] = nz;
    }
    if (project == "x") {
        posList = posList.x
    }
    if (project == "y") {
        posList = posList.y
    }
    if (project == "z") {
        posList = posList.z
    }
    return JSON.stringify(posList)
}
