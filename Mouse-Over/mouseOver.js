const xposValue = document.querySelector("#xpos-value");
const yposValue = document.querySelector("#ypos-value");

window.addEventListener("mousemove", () => {
  // console.log(event);
  const xclient = event.clientX;
  const yclient = event.clientY;
  xposValue.textContent = xclient;
  yposValue.textContent = yclient;
});
