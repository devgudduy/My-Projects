const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const imageContainer = document.querySelector(".img-container");

let count = 0;
let width = 500;
prev.addEventListener("click", () => {
  if (count > 0) {
    count--;
    imageContainer.style.transform = `translateX(-${count * width}px)`;
  }
});

next.addEventListener("click", () => {
  if (count < 5) {
    count++;
    imageContainer.style.transform = `translateX(-${count * width}px)`;
  }
});
