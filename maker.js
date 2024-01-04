// Word registration function
function registerWord() {
  const wordInput = document.getElementById("word-input");
  const word = wordInput.value.trim();

  if (word) {
    // Implement logic to register the word (e.g., send to server)
    console.log(`Registered word: ${word}`);
    // Display the registered word
    displayRegisteredWord(word);
    // Clear the input field
    wordInput.value = "";
  } else {
    alert("Please enter a valid word.");
  }
}

// Function to display the registered word
function displayRegisteredWord(word) {
  const wordList = document.querySelector("#registered-words ul");
  const listItem = document.createElement("li");
  listItem.textContent = word;
  wordList.appendChild(listItem);
}

// Create game function (modifiable as needed)
function createGame() {
  const wordCount = document.querySelectorAll("#registered-words ul li").length;

  if (wordCount < 10) {
    alert("Not enough words to create a game.");
    return;
  }

  // Implement logic to create the game (e.g., send registered words to the game page)
  console.log("Game created!");
  // You can redirect to the game page or perform other actions

  // For demonstration purposes, just logging a message
  console.log("Sending data to the server to create the game...");
  // Implement logic to send data to the server and create a game
  // This may involve making an AJAX request to your server
}
