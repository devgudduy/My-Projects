const quiz = [
  {
    question: "Q-1. What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    question: "Q-2. Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Joe Biden",
  },
  {
    question: "Q-3. What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question: "Q-4. What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
];

const studentName = prompt("Enter Your Name : ");
const question = document.getElementById("quiz-quetion");
// console.log(question);
// console.log(question.textContent);
const option_a = document.getElementById("text-option-a");
const option_b = document.getElementById("text-option-b");
const option_c = document.getElementById("text-option-c");
const option_d = document.getElementById("text-option-d");
// console.log(option_a);
// console.log(option_b);
// console.log(option_c);
// console.log(option_d);
// console.log(option_a.innerText);
// console.log(option_b.innerText);
// console.log(option_c.innerText);
// console.log(option_d.innerText);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;
const answerElement = document.querySelectorAll(".answer");

// console.log(quiz[currentQuestion].question);
// console.log(quiz[currentQuestion].ans1text);
// console.log(quiz[currentQuestion].ans2text);
// console.log(quiz[currentQuestion].ans3text);
// console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener("click", () => {
  const checkedAns = document.querySelector('input[type="radio"]:checked');
  // console.log(checkedAns);
  // console.log(checkedAns.nextElementSibling.textContent);
  if (checkedAns === null) {
    alert("Please select an answer");
  } else {
    if (
      checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer
    ) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      question.textContent = quiz[currentQuestion].question;
      option_a.textContent = quiz[currentQuestion].ans1text;
      option_b.textContent = quiz[currentQuestion].ans2text;
      option_c.textContent = quiz[currentQuestion].ans3text;
      option_d.textContent = quiz[currentQuestion].ans4text;
      checkedAns.checked = false;
    } else {
      alert(
        studentName + ", your score is " + score + " out of " + quiz.length
      );
    }
  }

  // answerElement.forEach((answer) => {
  //   console.log(answer.checked);
  // });
});
