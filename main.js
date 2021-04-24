/* This main script should not included any function*/

//example
function interact(e){
    var player = e.player;
    if(asyncBox(e,x,y,z,dx,dy,dz,"xxxx",20)) e.npc.scoreboard.setPlayerScore(player,"ArchLevel",1)

}

function interact(e){
    e.npc.say("Beginning saving")
    setTimeout(function(){
        var x = GetBlock(2168,3,-1486,2164,6,-1482,"x")
        var y = GetBlock(2168,3,-1486,2164,6,-1482,"y")
        var z = GetBlock(2168,3,-1486,2164,6,-1482,"z")
        e.npc.say("收集完成");
        saveAreaDataToTheFile(e,"1*1",x,y,z)
        e.npc.say("原区域收集完毕")
    },5000)
}
