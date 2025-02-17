const counter = document.querySelector("#counter");
const plus = document.querySelector("#increment");
const reset = document.querySelector("#reset");
const minus = document.querySelector("#decrement");

let val = 0;
plus.addEventListener("click", () => {
  val++;
  counter.textContent = val;
});

reset.addEventListener("click", () => {
  val = 0;
  counter.textContent = val;
});

minus.addEventListener("click", () => {
  val--;
  counter.textContent = val;
});
