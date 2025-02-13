const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const timer = document.querySelector("#timer");

let minutes = 25;
let seconds = 0;
let timerId;
start.addEventListener("click", () => {
  timerId = setInterval(() => {
    if (seconds === 0) {
      seconds = 59;

      if (minutes !== 0) {
        minutes--;
      }
    } else {
      seconds--;
      if (minutes === 0 && seconds === 0) {
        clearInterval(timerId);
      }
    }
    if (minutes >= 10 && seconds >= 10) {
      timer.innerHTML = `${minutes}:${seconds}`;
    } else if (minutes >= 10 && seconds <10) {
      timer.innerHTML = `${minutes}:0${seconds}`;
    } else if (minutes < 10 && seconds >= 10) {
      timer.innerHTML = `0${minutes}:${seconds}`;
    } else if (minutes < 10 && seconds < 10) {
      timer.innerHTML = `0${minutes}:0${seconds}`;
    }
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(timerId);
});

reset.addEventListener("click", () => {
  minutes = 25;
  seconds = 0;
  timer.innerHTML = `${minutes}:0${seconds}`;
});

// if (minutes < 10) {
//   timer.innerHTML = `0${minutes}:${seconds}`;

// }else{
//   if (seconds < 10) {
//     timer.innerHTML = `${minutes}:0${seconds}`;
//   }
//   if (minutes < 10 && seconds < 10) {
//     timer.innerHTML = `0${minutes}:0${seconds}`;
//   }
//   if (minutes === 0 && seconds === 0) {
//     clearInterval(timerId);
//   }
// }
