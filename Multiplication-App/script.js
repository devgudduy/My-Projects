const score = document.querySelector("#score");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
let input = document.querySelector("#input");
const submit = document.querySelector("#submit");
num1.textContent = Math.floor(Math.random() * 10);
num2.textContent = Math.floor(Math.random() * 10);

let count = 0;
submit.addEventListener("click", () => {
  // console.log(input.value);
  let val = input.value;
  val = val.trim();
  val = Number(val);
  let mult =
    document.querySelector("#num1").textContent *
    document.querySelector("#num2").textContent;
  mult = Number(mult);
  if (input.value === "") {
    alert("Please enter a number");
  } else if (val === mult) {
    count++;
    score.textContent = count;
    input.value = "";
    num1.textContent = Math.floor(Math.random() * 10);
    num2.textContent = Math.floor(Math.random() * 10);
    score.style.color = "green";
  } else {
    score.style.color = "red";
    num1.textContent = Math.floor(Math.random() * 10);
    num2.textContent = Math.floor(Math.random() * 10);
  }
});
