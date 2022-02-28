// Global Variables Here
const PlayerX = "X";
const PlayerO = "O";
const blocks = document.querySelectorAll(".in");
let turn = PlayerX;


////////////////////////////////
// Functions For Game Logic Here
const squareTat = Array(blocks.length);
squareTat.fill(null);
const done = document.getElementById("winrest");
const win = document.getElementById("win");
const line = document.getElementById("line");
const restart = document.getElementById("restart");

////////////////////////////////
// Event Listeners Here


blocks.forEach((blocks) => blocks.addEventListener('click', blocksClick));
function blocksClick(event){
 if (winrest.classList.contains("visible")) {
     return;
 }

 const blocks = event.target;
 const blockNumber = blocks.dataset.index;
 if (blocks.innerText != "") {
     return;
 }
 if(turn === PlayerX) {
     blocks.innerText = PlayerX;
     squareTat[blockNumber -1] = PlayerX ;
     turn = PlayerO;
 }  else  {
    blocks.innerText = PlayerO;
    squareTat[blockNumber -1] = PlayerO ;
    turn = PlayerX;
}
whoWon();
}
// I can't get this to work.
function whoWon() {
    for (const winSet of winSet){
        console.log(winSet);
    }
}


//This displays who whon
const winSet = [
    //These are the rows
    {set:[1,2,2], lineClass: "line-1-top"},
    {set:[4,5,6], lineClass: "line-2-mid"},
    {set:[7,8,9], lineClass: "line-3-bottom"},
    //These are the columns
    {set:[1,4,7], lineClass: "line-1-vert"},
    {set:[2,5,8], lineClass: "line-2-vert"},
    {set:[3,6,9], lineClass: "line-3-vert"},


    //These are the diagonals
    {set:[1,5,9], lineClass: "diag-line1"},
    {set:[3,5,7], lineClass: "diag-line2"},
]

////////////////////////////////
