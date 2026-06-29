console.clear();

const operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const addButton = document.querySelector('[data-js ="add"]');
const subtractButton = document.querySelector('[data-js ="subtract"]');
const mulitplyButton = document.querySelector('[data-js ="multiply"]');
const divideButton = document.querySelector('[data-js ="divide"]');
const exponentButton = document.querySelector('[data-js ="exponent"]');
const modButton = document.querySelector('[data-js = "modulo"]');
let increaseByOneButton = document.querySelector('[data-js ="increase-by-one"]');
let increaseByFiveButton = document.querySelector('[data-js ="increase-by-five"]');
let decreaseByOneButton = document.querySelector('[data-js ="decrease-by-one"]');
let decreaseByFiveButton = document.querySelector('[data-js ="decrease-by-five"]');
let multiplyByTwoButton = document.querySelector('[data-js ="multiply-by-two"]');
let divideByTwoButton = document.querySelector('[data-js ="divide-by-two"]');
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
addButton.addEventListener("click", () => {
  const result = operand1 + operand2;
  console.log(result);
});
subtractButton.addEventListener("click", () => {
  const result = operand1 - operand2;
  console.log(result);
});
mulitplyButton.addEventListener("click", () => {
  const result = operand1 * operand2;
  console.log(result);
});
divideButton.addEventListener("click", () => {
  const result = operand1 / operand2;
  console.log(result);
});
exponentButton.addEventListener("click", () => {
  const result = operand1 ** operand2;
  console.log(result);
});
modButton.addEventListener("click", () => {
  const result = operand1 % operand2;
  console.log(result);
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
increaseByOneButton.addEventListener("click", (event) => {
  const result = operand1 +1 ;
  console.log(result);
});
// --^-- write your code here --^--
increaseByFiveButton.addEventListener("click", (event) => {
  const result = operand1 +5 ;
  console.log(result);
});
decreaseByOneButton.addEventListener("click", (event) => {
  const result = operand1 -1 ;
  console.log(result);
});
decreaseByFiveButton.addEventListener("click", (event) => {
  const result = operand1 -5 ;
  console.log(result);
});
multiplyByTwoButton.addEventListener("click", (event) => {
  const result = operand1 *2;
  console.log(result);
});
divideByTwoButton.addEventListener("click", (event) => {
  const result = operand1 /2;
  console.log(result);
});