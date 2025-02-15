const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.querySelector("#new-quote");

async function getQuote() {
  // const quotes = await fetch("https://api.quotable.io/quotes/random");
  // const quotes = await fetch("https://api.api-ninjas.com/v1/quotes");

  const quotes = await fetch("https://dummyjson.com/quotes?limit=0");
  const data = await quotes.json();
  // console.log(quotes);
  // console.log(data);
  let a = Math.floor(Math.random() * 1454);
  // console.log(a);
  // console.log("quote: ", data.quotes[50]);
  // console.log(data.quotes[a].author);
  // console.log(data.quotes[a].quote);
  author.textContent = "-" + " " + data.quotes[a].author;
  quote.textContent = data.quotes[a].quote;
}

button.addEventListener("click", getQuote);
