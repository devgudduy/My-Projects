const container = document.querySelector(".container");

// hexcode
// 0 - 9
// A - F
// #000000 - #FFFFFF
// #39AB8C
const hexcode = "0123456789ABCDEF";

for (let i = 0; i < 30; i++) {
  const box = document.createElement("div");
  box.classList.add("color-card");
  let color = "#";
  for (let j = 0; j < 6; j++) {
    color += hexcode[getRandomNum()];
  }
  // console.log("color", color);
  // box.textContent = i + 1;
  box.textContent = color;
  box.style.backgroundColor = color;
  container.appendChild(box);
}

function getRandomNum() {
  return Math.floor(Math.random() * 16);
}

// console.log(getRandomNum());

// steps
// 1. select box using class
// 2. using for loop generate box.
// 3. create a function for random number generator between 0 to 16. and create other for loop for same purpose
// 4. create a variable for hexcode and pass the index by calling randomNum function inside the hexcode like this.. hexcode[randomeNum()]
// 5. Done
