// static/maker.js

document.addEventListener("DOMContentLoaded", () => {
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const wordInput = document.getElementById("word-input");
  const wordList = document.getElementById("word-list");
  const gameForm = document.getElementById("game-form");
  const words = [];

  gameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitWords();
  });

  window.addWord = () => {
    const newWord = wordInput.value.trim().toUpperCase();
    if (newWord && !words.includes(newWord)) {
      words.push(newWord);
      updateWordList();
      wordInput.value = "";
    }
  };

  window.submitWords = () => {
    // 로직 추가: 서버에 단어 목록과 게임 정보를 전송
    const gameData = {
      title: titleInput.value,
      description: descriptionInput.value,
      words: words,
    };
    console.log(gameData);
    // 여기서 서버로 데이터를 전송하는 코드를 추가해야 합니다.
  };

  const updateWordList = () => {
    wordList.innerHTML = "";
    words.forEach((word) => {
      const wordItem = document.createElement("div");
      wordItem.innerText = word;
      wordList.appendChild(wordItem);
    });
  };
});
