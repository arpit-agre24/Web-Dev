var indexArr = Array(9).fill(null);
var currentPlayer = "X";
var winner = document.getElementById("winnerText");
var gameOver = false;

function handleClick(elt) {
    if (gameOver || indexArr[elt.id] !== null) return; // Prevent moves after game over or on filled cells

    const id = elt.id;
    indexArr[id] = currentPlayer;
    elt.textContent = currentPlayer;

    if (checkWinner(indexArr)) {
        winner.textContent = `Winner is ${currentPlayer}`;
        gameOver = true; // Stop the game
    } else if (indexArr.every(cell => cell !== null)) {
        winner.textContent = "It's a draw!";
        gameOver = true; // Stop the game
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch player
    }
}

function checkWinner(indexArr) {
    return (
        (indexArr[0] !== null && indexArr[0] === indexArr[1] && indexArr[1] === indexArr[2]) ||
        (indexArr[3] !== null && indexArr[3] === indexArr[4] && indexArr[4] === indexArr[5]) ||
        (indexArr[6] !== null && indexArr[6] === indexArr[7] && indexArr[7] === indexArr[8]) ||

        (indexArr[0] !== null && indexArr[0] === indexArr[3] && indexArr[3] === indexArr[6]) ||
        (indexArr[1] !== null && indexArr[1] === indexArr[4] && indexArr[4] === indexArr[7]) ||
        (indexArr[2] !== null && indexArr[2] === indexArr[5] && indexArr[5] === indexArr[8]) ||

        (indexArr[0] !== null && indexArr[0] === indexArr[4] && indexArr[4] === indexArr[8]) ||
        (indexArr[2] !== null && indexArr[2] === indexArr[4] && indexArr[4] === indexArr[6])
    );
}