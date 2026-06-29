// Change this value to test different "weather" conditions.
const weather = "sunny"
const temperature = 20 
switch (weather,temperature) {
    case "rainy":
        console.log("It's raining, don't forget your umbrella!");
    break;
    case "sunny":
        console.log("It's sunny!");
    break;
    case "snowy":
        console.log("It's snowing, stay warm!");
    break;
    case "rainy" && "<= 20":
    console.log("It's sunny, but a bit chilly!");
    break;
    default:
        console.log("I'm not sure what the weather is like.");

}
// Adjust the "temperature" value to trigger different messages (for Part 2 only).
