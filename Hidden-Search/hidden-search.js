const searchContainer = document.querySelector(".search-container");
const searchBtn = document.querySelector("#btn");
const searchInput = document.querySelector(".input");

searchBtn.addEventListener("click", () => {
  // if (searchContainer.classList.contains("active")) {
  //   searchContainer.classList.remove("active");
  // } else {
  //   searchContainer.classList.add("active");
  //   searchInput.focus();
  // }

  searchContainer.classList.toggle("active");
  // searchInput.focus();
});
