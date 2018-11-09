// How to Build a Switch Statement in JavaScript to Check for Data Types video



var dataPoint = {};

switch (typeof dataPoint) {
  case "string":
    console.log("It's a string");
    break;
  case "number":
    console.log("It's a number");
    break;
  case "boolean":
    console.log("It's a boolean");// it is either true or false
    break;
  default:
    console.log('No matches');
}
