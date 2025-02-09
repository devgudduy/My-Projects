const celsius = document.querySelector("#celsius");
const kelvin = document.querySelector("#kelvin");
const farenheit = document.querySelector("#farenheit");

// celsius to farenheit => c*9/5 + 32 =  32K if c = 0
// celsius to kelvin => c + 273.15 = 273.15K if c = 0
celsius.addEventListener("input", () => {
  let c = parseFloat(celsius.value);
  let f = c * 1.8 + 32;
  let k = c + 273.15;
  farenheit.value = f.toFixed(3);
  kelvin.value = k.toFixed(3);
});

// farenheit to celsius => (32F -32) * 5/9 = 0C
// farenheit to kelvin => (32F -32)*5/9 + 273.15 = 273.15k

farenheit.addEventListener("input", () => {
  let f = parseFloat(farenheit.value);
  let c = ((f - 32) * 5) / 9;
  let k = ((f - 32) * 5) / 9 + 273.15;
  celsius.value = c.toFixed(3);
  kelvin.value = k.toFixed(3);
});

// kelvin to celsius => k - 273.15 = -273.15C if k = 0
// kelvin to farenheit => (k - 273.15)*9/5 + 32 = 459.7F if k = 0

kelvin.addEventListener("input", () => {
  let k = parseFloat(kelvin.value);
  let c = k - 273.15;
  let f = ((k - 273.15) * 9) / 5 + 32;
  celsius.value = c.toFixed(3);
  farenheit.value = f.toFixed(3);
});
