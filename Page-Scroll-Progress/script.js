const scrollbar = document.querySelector(".scrollbar");

window.addEventListener("scroll", () => {
  // console.log("scrollY", window.scrollY);
  // console.log("scrollHeight", document.body.scrollHeight);
  // console.log("innerHeight", window.innerHeight);
  let percentage =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  scrollbar.style.width = percentage + "%";
});

// Main things here
// 1. scrollY distance from the top of the page to the to of the scrollbar
// 2. innerHeight == height of the page (which inlucdes height of the page + height of the scrollbar)
// 3. scrollHeight == total height of the page (which includes height of the page + height of the scrollbar)
