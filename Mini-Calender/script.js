const month = document.querySelector(".month");
const weekDay = document.querySelector(".week-day");
const day = document.querySelector(".day");
const year = document.querySelector(".year");

window.addEventListener("DOMContentLoaded", () => {
  let date = new Date();
  // console.log(date);
  // console.log(date.toLocaleDateString("en-US", { month: "long" }));
  // console.log(date.toLocaleDateString("en-US", { weekday: "long" }));
  // console.log(date.getDate());
  // console.log(date.getFullYear());

  month.textContent = date.toLocaleDateString("en-US", { month: "long" });
  weekDay.textContent = date.toLocaleDateString("en-US", { weekday: "long" });
  day.textContent = date.getDate();
  year.textContent = date.getFullYear();
});
