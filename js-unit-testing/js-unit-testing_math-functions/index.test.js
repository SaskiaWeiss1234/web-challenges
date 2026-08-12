import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("add() returns a number 5 if called with the arguments 2 and 3.",() => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
test("add returns a negative value if the greater argument is negative.", () => {
  const result = add(-5, 1);
  expect(result).toBeLessThan(0);
});
test("add returns a value close to 0.3 if called with the arguments 0.1 and 0.2", () => {
  const result = add(0.2, 0.1);
  expect(result).toBeCloseTo(0.3);
});
test("subtract returns 10 if called with subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});
test("subtract returns a negative value if the second argument is greater than the first one", () => {
  const result = subtract(5, 10);
  expect(result).toBeLessThan(0);
});
test("multiply() returns 8 if called with the arguments (2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});
test("returns a negative value if only the first argument is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});
test("returns a negative value if only the second argument is negative", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});
test("mutliply returns a positive value if called with two negative numbers", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});
test("divide returns  if called with (9,3) ", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
test("divide returns You should not do this!", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});