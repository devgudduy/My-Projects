const button = document.querySelector(".btn");
const output = document.querySelector(".output");
const generate = document.querySelector("#generate");

// console.log("button", button, "output", output);

// const url = "https://api.github.com/emojis";
const url =
  "https://emoji-api.com/emojis?access_key=8bd7c2327a663e6d1b92a245cc9b14a0b56f7bf6";
generate.addEventListener("click", () => {
  // console.log("button clicked");
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log("data", data);
      const randomIndex = Math.floor(Math.random() * data.length);
      // console.log("randomIndex", randomIndex);
      const randomEmoji = data[randomIndex].character;
      // console.log("randomEmoji", randomEmoji);
      button.textContent = randomEmoji;
      // console.log("unicode", data[randomIndex].unicodeName);
      output.textContent = data[randomIndex].unicodeName;
    });
});
