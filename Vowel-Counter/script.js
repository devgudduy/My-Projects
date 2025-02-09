const textfield = document.querySelector("#textfield");
const checkBtn = document.querySelector("#checkBtn");
const output = document.querySelector("#output");
const copy = document.querySelector("#copyBtn");

checkBtn.addEventListener("click", function () {
  if (textfield.value === "") {
    output.innerHTML = "Please enter some text";
  } else {
    //aeiou
    const val = textfield.value;
    var count = 0;
    for (let i = 0; i <= val.length; i++) {
      if (
        val[i] === "a" ||
        val[i] === "e" ||
        val[i] === "i" ||
        val[i] === "o" ||
        val[i] === "u"
      )
        count++;
    }
    output.innerHTML = `Total number of vowel is ${count}`;
  }
});

copy.addEventListener("click", () => {
  if (textfield.value === "") {
    alert("Please enter some text");
  } else {
    const newBox = document.createElement("textarea");
    newBox.value = textfield.value;
    document.body.appendChild(newBox);
    newBox.select();
    document.execCommand("copy");
    alert("Text Copied to Clipboard");
    newBox.remove();
  }
});
