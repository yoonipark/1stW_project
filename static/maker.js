// maker.js
document.addEventListener("DOMContentLoaded", function () {
  const wordForm = document.getElementById("wordForm");

  wordForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("titleInput").value.trim();
    const description = document
      .getElementById("descriptionInput")
      .value.trim();
    const wordListText = document.getElementById("wordListInput").value.trim();
    const wordList = wordListText
      .split("\n")
      .filter((word) => word.trim() !== "");

    // 등록된 정보를 서버로 전송하거나 필요한 처리를 수행하세요.
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Word List:", wordList);
  });
});
