/* This main script should not included any function*/

//example
function interact(e){
    const player = e.player;
    const targetArchArray = getBlockesFromXYZ(e, 0, 0, 0, 1, 1, 1);
    const playerArchArray = getBlockesFromXYZ(e, 0, 0, 0, 1, 1, 1);
    if(targetArchArray === playerArchArray){
        e.npc.scoreboard.setPlayerScore(player,"ArchLevel",1);
    }
}