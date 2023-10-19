let currentPlayer = "X";
let cells = document.querySelectorAll(".cell");
let message = document.getElementById("message");

function makeMove(cellIndex) {
  const cell = cells[cellIndex];
  if (cell.textContent === "" && !checkWin()) {
    cell.textContent = currentPlayer;
    if (checkWin()) {
      message.textContent = `${currentPlayer} wins!`;
    } else if ([...cells].every((cell) => cell.textContent !== "")) {
      message.textContent = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      message.textContent = `${currentPlayer}'s turn`;
    }
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      return true;
    }
  }

  return false;
}

function resetBoard() {
  cells.forEach((cell) => (cell.textContent = ""));
  currentPlayer = "X";
  message.textContent = "X's turn";
}

document.getElementById("reset").addEventListener("click", resetBoard);
