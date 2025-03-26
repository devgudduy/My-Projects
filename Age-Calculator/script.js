const inputBtn = document.querySelector("#age-dob-inppt");
const calculateBtn = document.querySelector("#calculate-btn");
const ageResult = document.querySelector("#age-result");
// console.log("inputBtn ", inputBtn);
// console.log("calculateButton ", calculateBtn);
// console.log("ageResult ", ageResult);

calculateBtn.addEventListener("click", () => {
  if (inputBtn.value === "") {
    alert("Please enter your date of birth");
  } else {
    // console.log("inputBtn value: ", inputBtn.value);
    let dob = new Date(inputBtn.value);
    let dobYear = dob.getFullYear();
    // console.log("dob", dob);
    // console.log("dobYear", dobYear);

    // current
    let now = new Date();
    let nowYear = now.getFullYear();
    // console.log("now ", now);
    // console.log("nowYear ", nowYear);

    let yourAge = nowYear - dobYear;
    console.log("yourAge ", yourAge);
    ageResult.textContent = yourAge;
  }
});
