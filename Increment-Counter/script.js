const counters = document.querySelectorAll(".counter");
// console.log(counters);

counters.forEach((counter) => {
  counter.innerText = "0";
  let target = counter.getAttribute("data-target");
  // console.log(target);
  // let inc = target / 1000;
  let count = 0;
  function incrementCounter() {
    if (count < target) {
      count = count + 8;
      counter.innerText = count;
    } else {
      counter.innerText = target;
    }
    setInterval(incrementCounter, 1);
  }
  incrementCounter();
});
