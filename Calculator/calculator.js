const output = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
// console.log("output:", output);
// console.log("btn:", buttons);

let str = "";
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log("e.target.textContent", e.target.textContent);
    if (e.target.textContent === "AC") {
      str = "";
      output.value = str;
    } else if (e.target.textContent === "=") {
      if (str !== "") {
        str = eval(str);
        output.value = str;
      }
    } else if (e.target.textContent === "DEL") {
      str = str.substring(0, str.length - 1);
      output.value = str;
    } else {
      str += e.target.textContent;
      output.value = str;
    }
  });
});
