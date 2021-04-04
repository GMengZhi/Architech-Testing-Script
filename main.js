/* This main script should not included any function*/
function interact(e){
    var player = e.player;
    var targetArchArray = getBlockesFromXYZ(e,0,0,0,1,1,1);
    var playerArchArray = getBlockesFromXYZ(e,0,0,0,1,1,1);
    if(targetArchArray === playerArchArray){
        e.npc.scoreboard.setPlayerScore(player,"ArchLevel",1);
    }
}