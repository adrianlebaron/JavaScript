// Understanding the Key Difference Between Var and Let Variables Types video

// Var variables can be re-defined
var age = 12;
console.log(age);

var age = 15; // yep!
console.log(age);
// Let variables cannot be re-defined that is why it breaks
let age = 12;
console.log(age);

let age = 15; // nope!
console.log(age);

// could do 

let age = 12;
console.log(age);

age = 16; // nope!
console.log(age);

const // can redefine