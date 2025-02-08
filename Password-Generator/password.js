const lengthp = document.querySelector("#length-number");
const upper = document.querySelector("#uppercase");
const lower = document.querySelector("#lowercase");
const number = document.querySelector("#numbers");
const symbol = document.querySelector("#symbols");

const passinp = document.querySelector("#pass-input");
const copy = document.querySelector("#copy");
const genrate = document.querySelector("#generate");

console.log(lengthp.value);
console.log(upper.checked);
console.log(lower.checked);
console.log(number.checked);
console.log(symbol.checked);

const uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseStr = "abcdefghijklmnopqrstuvwxyz";
const numberStr = "0123456789";
const symbolStr = "!@#$%^&*_-+=:;.?/";

let password = "";
genrate.addEventListener("click", () => {
  let str = "";
  if (upper.checked) {
    str += uppercaseStr;
  }

  if (lower.checked) {
    str += lowercaseStr;
  }

  if (number.checked) {
    str += numberStr;
  }

  if (symbol.checked) {
    str += symbolStr;
  }
  console.log("str : ", str);
  password = "";
  for (let i = 0; i < lengthp.value; i++) {
    console.log("str.length", str.length);
    let index = Math.floor(Math.random() * str.length);

    console.log("index", index);
    console.log("Math.random()", Math.random());
    console.log("Math.random() * str.length", Math.random() * str.length);
    console.log(
      "Math.floor(Math.random() * str.length)",
      Math.floor(Math.random() * str.length)
    );
    console.log(str[index]);
    password += str[index];
  }
  console.log("password", password);
  passinp.value = password;
});

copy.addEventListener("click", () => {
  if (passinp.value === "") {
    alert("Please Generate a Password First");
  } else {
    const newele = document.createElement("textarea");
    newele.value = passinp.value;
    document.body.appendChild(newele);
    newele.select();
    document.execCommand("copy");
    alert("Password Copied to Clipboard");
    newele.remove();
  }
});

// DVog#8p^xZ
// Xx^VluPY?c