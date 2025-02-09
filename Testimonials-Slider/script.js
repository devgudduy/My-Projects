const testimonials = [
  "This software has transformed my workflow! Highly recommend!",
  "The team's professionalism and skill were beyond expectations.",
  "Great quality and fast delivery. I'll be back for more!",
  "Their customer service is outstanding. They went above and beyond to help me.",
  "I've never had a better experience with any other company. Five stars!",
  "The product exceeded my expectations in every way. Truly a game-changer.",
  "I'm so grateful for their support. They made a stressful situation so much easier.",
  "Their attention to detail is unmatched. I'm thoroughly impressed.",
  "I've been a loyal customer for years, and I'll continue to be. They never disappoint.",
  "This is the best purchase I've made this year. Highly recommend to everyone!",
];
const authors = [
  "Jane Doe",
  "John Smith",
  "Emily Johnson",
  "Michael Brown",
  "Sarah Davis",
  "David Wilson",
  "Laura Miller",
  "Robert Anderson",
  "Jessica Taylor",
  "Daniel Martinez",
];

let count = 1;
const author = document.querySelector("#author");
const testimonial = document.querySelector("#testimonial");
// const image = document.querySelector("#image");
const imgContainer = document.querySelector("#image-container");

setInterval(() => {
  imgContainer.innerHTML = `<img src = https://xsgames.co/randomusers/assets/avatars/male/${count}.jpg alt = 'profile image' id = 'image'>`;
  testimonial.textContent = testimonials[count];
  author.textContent = authors[count];
  count++;
  if (count > authors.length - 1) {
    count = 1;
  }
}, 5000);
