const animatedText = document.querySelector(".animated-text");
const text = animatedText.textContent;

let i = 0;
let speed = 150;
// console.log(animatedText.textContent.length);

function animate() {
  animatedText.textContent = text.substring(0, i);
  i++;
  if (i > text.length) {
    i = 0;
  }
  setTimeout(animate, speed);
}
animate();
