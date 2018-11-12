const lyrics = 'Never gonna give you up';

console.log(I'm ${lyrics});
console.log(I'm ${2 + 2});
console.log(I'm ${lyrics + " " + lyrics});

// remember using the back ticks for string interperlation
// $ sign and { curly brackets}


// Integrating Conditionals into JavaScript Strings with Ternary Operators

// https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1245

const page = 'home';
console.log(`class=${ page === 'Home' ? 'master-layout' : 'secondary-layout' }`);

const page = 'about';
console.log(`class=${ page === 'Home' ? 'master-layout' : 'secondary-layout' }`);
// this is false so turns out secondary-layout


// == compares values 
// === compares datatype and value