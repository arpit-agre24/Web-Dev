var indexArr = Array(9).fill(null);
var currentPlayer = "X";
var winner = document.getElementById("winnerText");

const playX = document.getElementById("xTurn");
const playO = document.getElementById("oTurn");
const buttons = document.querySelector("buttons")

// buttons.addEventListener("click", () => {
//     buttons.classList.replace("container" ,"containerClick");
// })

function startGame(player){
    window.location.href
}

function handleClick(elt){
    const id = elt.id;
    indexArr[id] = currentPlayer;
    elt.textContent = currentPlayer;
    checkWinner(indexArr);
    currentPlayer = currentPlayer == "X" ? "O" : "X";
}

function checkWinner(indexArr){
    if(
        (indexArr[0] !== null && indexArr[0] == indexArr[1] && indexArr[1] == indexArr[2]) ||
        (indexArr[3] !== null && indexArr[3] == indexArr[4] && indexArr[4] == indexArr[5]) ||
        (indexArr[6] !== null && indexArr[6] == indexArr[7] && indexArr[7] == indexArr[8]) ||

        (indexArr[0] !== null && indexArr[0] == indexArr[3] && indexArr[3] == indexArr[6]) ||
        (indexArr[1] !== null && indexArr[1] == indexArr[4] && indexArr[4] == indexArr[7]) ||
        (indexArr[2] !== null && indexArr[2] == indexArr[5] && indexArr[5] == indexArr[8]) ||

        (indexArr[0] !== null && indexArr[0] == indexArr[4] && indexArr[4] == indexArr[8]) ||
        (indexArr[2] !== null && indexArr[2] == indexArr[4] && indexArr[4] == indexArr[6])
    ){
        winner.textContent = `Winner is ${currentPlayer}`;
    }
}