const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

// console.log(currentYear);
// console.log(nextYear);

setInterval(() => {
  const currentDate = new Date();
  const newYearDate = new Date(`January 01 ${nextYear} 00:00:00`);
  const totalSeconds = (newYearDate - currentDate) / 1000;

  const daysLeft = Math.floor(totalSeconds / 3600 / 24);
  const hoursLeft = Math.floor(totalSeconds / 3600) % 24;
  const minutesLeft = Math.floor(totalSeconds / 60) % 60;
  const secondsLeft = Math.floor(totalSeconds) % 60;

  //check working or not
  // console.log("dayLeft", daysLeft);
  // console.log("hoursLeft", hoursLeft);
  // console.log("minutesLeft", minutesLeft);
  // console.log("secondsLeft", secondsLeft);

  days.textContent = daysLeft;
  hours.textContent = hoursLeft;
  minutes.textContent = minutesLeft;
  seconds.textContent = secondsLeft;
}, 1000);
