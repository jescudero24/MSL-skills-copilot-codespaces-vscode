let board = Array.from(document.querySelectorAll('#board td'));
let currentPlayer = 'X';
let gameIsLive = true;

function checkGameStatus() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        if (board[combination[0]].textContent && 
            board[combination[0]].textContent === board[combination[1]].textContent && 
            board[combination[0]].textContent === board[combination[2]].textContent) {
            gameIsLive = false;
            return;
        }
    }

    if (board.every(cell => cell.textContent)) {
        gameIsLive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

board.forEach(cell => {
    cell.addEventListener('click', (e) => {
        if (!gameIsLive || e.target.textContent) {
            return;
        }
        e.target.textContent = currentPlayer;
        checkGameStatus();
    });
});

document.getElementById('reset').addEventListener('click', () => {
    board.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    gameIsLive = true;
});