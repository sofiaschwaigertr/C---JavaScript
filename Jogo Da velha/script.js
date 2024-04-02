document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game');
    const message = document.getElementById('message');
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
  
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];
  
    function renderBoard() {
      gameBoard.innerHTML = '';
      board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.innerText = cell;
        cellElement.addEventListener('click', () => handleCellClick(index));
        gameBoard.appendChild(cellElement);
      });
    }
  
    function handleCellClick(index) {
      if (!gameActive || board[index] !== '') return;
  
      board[index] = currentPlayer;
      renderBoard();
      if (checkForWin()) {
        message.innerText = `${currentPlayer} venceu!`;
        gameActive = false;
      } else if (!board.includes('')) {
        message.innerText = 'Empate!';
        gameActive = false;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.innerText = `É a vez do jogador ${currentPlayer}`;
      }
    }
  
    function checkForWin() {
      return winningCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
      });
    }
  
    renderBoard();
  });
  