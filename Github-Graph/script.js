const container = document.querySelector(".container");
console.log(container);

let square_count = 365;
const colors = ["#196127", "#239a3b", "#7bc96f", "#c6e48b", "#ebedf0"];

for (let i = 0; i < square_count; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.backgroundColor = randomColor(colors);
  container.appendChild(square);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}
