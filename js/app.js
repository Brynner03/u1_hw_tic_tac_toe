// Global Variables Here
const PlayerX = "X";//This is Player X's value.
const PlayerO = "O";//This is Player O's value.
const blocks = document.querySelectorAll(".in"); //This selects all of the boxes
let turn = PlayerX;


////////////////////////////////
// Functions For Game Logic Here
const squareTat = Array(blocks.length); //squareTat is the square as a whole.
squareTat.fill(null);
const done = document.getElementById("winrest"); //Changed winrest Id into done.
const win = document.getElementById("win");
const line = document.getElementById("line");
const restart = document.getElementById("restart");

////////////////////////////////
// Event Listeners Here
restart.addEventListener('click', refresh);

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
      // If turn is player X, and they click. Please change it to O's turn
 if(turn === PlayerX) {
     blocks.innerText = PlayerX;
     squareTat[blockNumber -1] = PlayerX ;
     turn = PlayerO;
     // If turn is player O, and they click. Please change it to X's turn
 }  else  {
    blocks.innerText = PlayerO;
    squareTat[blockNumber -1] = PlayerO ;
    turn = PlayerX;
}
whoWon();
}
// Checks the winner and adds the display
function whoWon() {
    for (const winset of winSet) {
       const { set, lineClass } = winset;
       const blockV1 = squareTat[set[0] -1];
       const blockV2 = squareTat[set[1] -1];
       const blockV3 = squareTat[set[2] -1];

       if(
        blockV1 != null && 
        blockV1 === blockV2 && 
        blockV1 === blockV3
        ) {
           line.classList.add(lineClass);
           gameDone(blockV1);
           return;
       }
    }
    //This is the draw function, so that when every block is filled, and no winner is detected. This will show up
    const squareFilled = squareTat.every((blocks) => blocks !== null);
    if (squareFilled) {
        gameDone(null);
    }
}
//This is the winner/draw function
function gameDone(winText){
    let text = "Draw!";
    if (winText != null) {
        text = `${winText} has won!`;
    }
    done.className = "visible";
    win.innerText = text;
}
// This is for the restart button
function refresh() {
    line.className = "line";
    done.className = "hide";
    squareTat.fill(null);

    // This is going to set the tiles to blank
    blocks.forEach((blocks) => (blocks.innerText =""));
    //On refresh, turn goes back to X
    turn = PlayerX
    win.innerText = "";
    
}


//This displays the strike on who whon
const winSet = [
    //These are the rows
    {set:[1,2,3], lineClass: "line-1-top"},
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
