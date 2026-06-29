console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

let receivedPassword = "password1234";
receivedPassword === SUPER_SECRET_PASSWORD ? console.log("Welcome, you are logged in as Brunhilde1984.") : console.log("Access denied!");
// Part 2: Even / Odd
const number = 6;
number % 2 === 0 ? console.log("even Number") : console.log("odd number");
// Part 3: Hotdogs
const numberOfHotdogs = 100;
const cumulativePriceUnderFive = numberOfHotdogs * 2;
const priceBetween5and99 = numberOfHotdogs * 1.5;
const priceAbove100 = numberOfHotdogs * 1;
const lowestPrice = numberOfHotdogs * 0.1
if (numberOfHotdogs < 5) {console.log("You'll haave to pay"+ cumulativePriceUnderFive)} else if (numberOfHotdogs >= 5 && numberOfHotdogs <= 99 ) {console.log("You'll have to pay " + priceBetween5and99 )} else if (numberOfHotdogs >= 100 && numberOfHotdogs <= 999999) {console.log("You'll have to pay: " + priceAbove100)} else  {console.log("You'll have to pay: " + lowestPrice)};
// Part 4: Daytime
const currentHour = 17;

let statement = currentHour >= 17 ? "Partytime!!" : "Still need to learn...";

console.log(statement);

// Part 5: Greeting
const userName = "Daniel";

const greeting = userName === "Klaus" ? "Hello Coach!" : "Hello " + userName + "!";


console.log(greeting);
