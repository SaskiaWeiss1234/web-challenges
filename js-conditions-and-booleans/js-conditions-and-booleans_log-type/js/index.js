let data = 25;
if (Array.isArray(data)) {
    console.log("array!");
} else if (data === null) {
    console.log("null!");
} 
else {switch (typeof data) {
    case "undefined":
        console.log("undefined!");
        break;
    case "null": 
        console.log("null!");
        break;
    case "number":
        console.log("number!");
        break;
    case "not a number":
        console.log("not a number!");
        break;
    case "string":
        console.log("string!");
        break;
    case "boolean":
        console.log("boolean!");
        break;
    case "function":
        console.log("function!");
        break;
    case "object":
        console.log("object!");
        break;
    case "array":
        console.log("array!")
        break;
    default:
        console.log("I have no idea!.")
    };
};
