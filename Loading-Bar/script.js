const loadingBar = document.querySelector(".loading-bar");
const percentage = document.querySelector(".percentage");

window.addEventListener("DOMContentLoaded", () => {
  let progress = 0;
  setInterval(() => {
    if (progress < 100) {
      progress++;
      loadingBar.style.width = `${progress}%`;
      if (progress < 10) {
        percentage.textContent = `0${progress}%`;
      } else {
        percentage.textContent = `${progress}%`;
      }
    }
  }, 25);
});
