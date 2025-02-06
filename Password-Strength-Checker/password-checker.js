const inputField = document.querySelector("#password");
const outputField = document.querySelector("#output");

// event listener function
inputField.addEventListener("input", () => {
  // console.log(inputField.value);
  let password = inputField.value;
  if (password.length < 8) {
    outputField.innerText = "Password is too short";
    outputField.style.color = "red";
  } else {
    outputField.innerText = "Password is long enough";
    outputField.style.color = "green";

    //special characters !@#$%^&*()_+=-|\}]{[/?>,<.
    //special characters !@#$%^&*()_-+{}[]\|:;'""<>,.?
    // console.log("is lowercase", password.search(/[a-z]/));
    //a-z
    if (password.search(/[a-z]/) == -1) {
      outputField.innerText = "Password is missing a lowercae letter";
      outputField.style.color = "red";
    } //A-Z
    else if (password.search(/[A-Z]/) == -1) {
      outputField.innerText = "Password is missing a uppercase letter";
      outputField.style.color = "red";
    } //0-9
    else if (password.search(/[0-9]/) == -1) {
      outputField.innerText = "Password is missing a numeric letter";
      outputField.style.color = "red";
    } //special characters
    else if (
      password.search(
        /[!\@#\$\%\^\&\*\(\)\_\-\+\{\}\[\]\\\|\:\;\'\"\"\<\>\,\.\?\=]/
      ) == -1 //use backward slash(\) after every special character
    ) {
      outputField.innerText = "Password is missing a special letter";
      outputField.style.color = "red";
    }
  }
});
