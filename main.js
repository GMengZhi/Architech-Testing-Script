/* This main script should not included any function*/

//example
function interact(e){
    const player = e.player;
    const targetArchArray = getBoxFromXYZ(e, 0, 0, 0, 1, 1, 1);
    const playerArchArray = getBoxFromXYZ(e, 0, 0, 0, 1, 1, 1);
    if(targetArchArray === playerArchArray){
        e.npc.scoreboard.setPlayerScore(player,"ArchLevel",1);
    }
}