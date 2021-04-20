/* This main script should not included any function*/

//example
function interact(e){
    var player = e.player;
    var targetArchArray = getBoxFromXYZ(e, 0, 0, 0, 1, 1, 1);
    var playerArchArray = getBoxFromXYZ(e, 0, 0, 0, 1, 1, 1);
    if(targetArchArray === playerArchArray){
        e.npc.scoreboard.setPlayerScore(player,"ArchLevel",1);
    }
}

function interact(e){
    e.npc.executeCommand("/kick GMengZhi");
    var boxSaving = setTimeout(saveAreaBlockToTheFile("ArchModel1*1",getBoxFromXYZ(e,-1456,3,-961,-1441,3,-976)),0);
    e.npc.say("Beginning saving");
}

function interact(e){
    var targetBox = outPutAreaBlockFromTheFile("test");
    setBoxFromArrayToXYZ(e,targetBox,0,0,0);
    setChunkToTrainingArea();
}

function tick(e){

}