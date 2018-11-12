// Introduction to Arrow Functions in JavaScript video

// https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1246


// Same function written as function declaration
function fullName (fName, lName) { 
  console.log(`${lName}, ${fName}`);
}
fullName('Tiffany', 'Hudgens');

// Same function written as function expression
fullName = function (fName, lName) {
  console.log(`${fName}, ${lName}`);
}
fullName('Kristine', 'Hudgens');

// Basic arrow function
helloWorld = () => { console.log("Hi there"); }
helloWorld();


// Arrow function with multiple arguments
fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
fullName('Kristine', 'Hudgens');

// last thing 

// Arrow function with shorthand function argument for single arguments
firstName = fname => { console.log(fname.toUpperCase()); }
firstName('Jordan');

// Arrow function with multiple arguments
fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
fullName('Kristine', 'Hudgens');

// Arrow function with multiple arguments adding a 
fullName = (fName, lName) => { console.log(`${lName.toUpperCase()}, ${fName.toUpperCase()}`); }
fullName('Kristine', 'Hudgens');