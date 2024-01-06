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

// Handle Enter key event to register a word
function handleEnterKey(event) {
  if (event.key === "Enter") {
    // Register the word when Enter key is pressed
    registerWord();
    // Prevent form submission
    event.preventDefault();
  }
}

// Add an event listener for the Enter key on the word input field
document
  .getElementById("word-input")
  .addEventListener("keydown", handleEnterKey);

// Submit form function
async function submitForm() {
  const title = document.getElementById("title-input").value.trim();
  const description = document.getElementById("description-input").value.trim();
  const wordsList = Array.from(
    document.querySelectorAll("#registered-words ul li")
  ).map((li) => li.textContent.trim());

  if (title && description && wordsList.length >= 10) {
    try {
      // 데이터를 서버로 전송
      const response = await fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
          words: wordsList,
        }),
      });

      // 서버 응답 확인
      if (response.ok) {
        // 게임 페이지로 리다이렉트
        window.location.href = "/game.html";
      } else {
        alert("Error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again later.");
    }
  } else {
    alert("Please fill out all fields and register at least 10 words.");
  }
}
