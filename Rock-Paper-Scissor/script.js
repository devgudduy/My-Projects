const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const resultOutput = document.querySelector("#result");
let userChoice = "";
let computerChoice = "";
const buttons = document.querySelectorAll("button");
const youChose = document.querySelector("#you-chose");
const computerChose = document.querySelector("#computer-chose");

function getComputerChoice() {
  const choices = ["✊", "✋", "✌️"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
// console.log("Computer Choice : ", getComputerChoice());

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.innerText;
    computerChoice = getComputerChoice();
    // console.log("User Choice : ", userChoice);
    // console.log("Computer Choice : ", computerChoice);
    const result = findWinner();
    if (result == "You Win!") {
      // alert("You Win!");
      resultOutput.textContent = "You Win!";
      // console.log("You Win!");
      userScore.textContent = parseInt(userScore.innerText) + 1;
    } else if (result == "Computer Wins!") {
      // alert("Computer Wins!");
      resultOutput.textContent = "Computer Wins!";
      // console.log("Computer Wins!");
      computerScore.textContent = parseInt(computerScore.innerText) + 1;
    } else {
      // alert("It's a tie!");
      resultOutput.textContent = "It's a tie!";
      // console.log("It's a tie!");
    }
    youChose.textContent = userChoice;
    computerChose.textContent = computerChoice;
  });
});

function findWinner() {
  let result = "";
  if (userChoice == computerChoice) {
    result = "It's a tie!";
  } else if (userChoice == "✊") {
    if (computerChoice == "✋") {
      result = "Computer Wins!";
    } else {
      result = "You Win!";
    }
  } else if (userChoice == "✋") {
    if (computerChoice == "✌️") {
      result = "Computer Wins!";
    } else {
      result = "You Win!";
    }
  } else if (userChoice == "✌️") {
    if (computerChoice == "✊") {
      result = "Computer Wins!";
    } else {
      result = "You Win!";
    }
  }
  return result;
}
