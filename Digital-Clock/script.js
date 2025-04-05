const timer = document.querySelector(".timer");

function getTime() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  // if (s < 10) {
  //   s = "0" + s;
  // } else {
  //   s = s;
  // }

  //same as short method

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // console.log(h, m, s);

  const timerStr = h + ":" + m + ":" + s;
  // console.log(timerStr);
  timer.textContent = timerStr;
}

setInterval(getTime, 1000);
