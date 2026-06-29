console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // Write your code here
});

pizzaInput2.addEventListener("input", () => {
  // Write your code here
});

// Task 1: Define the function `calculatePizzaGain` here
function calculatePizzaGain() {
const diameter1 = pizzaInput1.value;
const diameter2 = pizzaInput2.value;
const circleArea1 = (Math.PI * diameter1 ** 2) / 4;
const circleArea2 = (Math.PI * diameter2 ** 2) / 4;
const pizzaGain = (circleArea2 - circleArea1) / (circleArea1 * 100);
const pizzaGainRounded = Math.round(pizzaGain);

}
// Task 2: Define the function `updatePizzaDisplay` here

// Task 3: Define the function `updateOutputColor` here
