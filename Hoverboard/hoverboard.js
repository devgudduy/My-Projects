const container = document.querySelector(".container");
const numberOfSquares = 505;
const points = document.querySelector("#points");
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
];

// let gamePoints = 0;
function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(element) {
  element.style.backgroundColor = randomColor();
}

function removeColor(element) {
  element.style.backgroundColor = "black";
  element.style.boxShadow = `0 0 2px 0 rgba(255, 255, 255, 0.4)`;
}

for (let i = 0; i <= numberOfSquares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setColor(square);
    // gamePoints++;
    // console.log(gamePoints);
    // points.textContent = gamePoints;
  });
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}
