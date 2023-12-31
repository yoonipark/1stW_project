// game.js
document.addEventListener("DOMContentLoaded", function () {
  const wordListContainer = document.getElementById("wordListContainer");
  const wordListElement = document.getElementById("wordList");
  const gameBoardElement = document.getElementById("gameBoard");

  // JavaScript code for interactive elements
  const wordList = ["WORD", "SEARCH", "EXAMPLE"]; // Replace with your actual word list
  const gameBoard = document.getElementById("game-board");

  // Function to generate a random letter
  function getRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  // Function to render the game board
  function renderGameBoard() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 14; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerText = getRandomLetter();
        gameBoard.appendChild(cell);
      }
    }
  }

  // Call the function to render the initial game board
  renderGameBoard();

  // Event listener for clicking on cells
  gameBoard.addEventListener("click", (event) => {
    const clickedCell = event.target;
    if (
      clickedCell.classList.contains("cell") &&
      !clickedCell.classList.contains("found")
    ) {
      const clickedLetter = clickedCell.innerText;
      if (wordList.includes(clickedLetter)) {
        // If the clicked letter is part of a word, mark it as found
        clickedCell.classList.add("found");
      }
    }
  });
});
