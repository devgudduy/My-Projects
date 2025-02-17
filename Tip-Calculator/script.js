const billAmount = document.querySelector("#bill-amount");
const tipPercentage = document.querySelector("#tip-percentage");
const calculate = document.querySelector("#calculate");
const output = document.querySelector("#bill");

// for checking above selected right or not
// console.log(billAmount, tipPercentage, calculate, bills);

const tipCalculate = () => {
  let bill = parseFloat(billAmount.value);
  let tip = tipPercentage.value;
  if (bill === "" || tip === "") {
    alert("Please Enter Value");
    return;
  } else if (bill < 0 || tip < 0) {
    alert("Please enter positive value");
  } else {
    tip = parseFloat(bill * (tip / 100));
    let totalBill = bill + tip;
    totalBill = totalBill.toFixed(2);
    // console.log("bill:", bill, "tip:", tip, "totalBill:", totalBill);
    output.textContent = totalBill;
  }
};
calculate.addEventListener("click", tipCalculate);
