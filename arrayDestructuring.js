https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1343

// How to Implement Array Destructuring in JavaScript video


const apiList = [
  'https://api.dailysmarty.com/posts',
  'https://api.github.com/users/jordanhudgens/repos',
  'https://api.github.com/users/jordanhudgens'
]

const [posts, repos, profile] = apiList;

console.log(posts);
console.log(repos);
console.log(profile);

// instead of using curly brackets on all print outs instead of console log on eac

console.log(
  ${posts}
  ${repos}
  ${profile}
);


// CODING EXERCISE
// Assign Kiwi, Iced Coffee, and Roses to their respective titles. 
// Copy and paste their names to ensure the test will not fail because of a spelling error.
//Create and name your array list here 
const things = [
  `Iced Coffee`,
  `Roses`,
  `Kiwi`// this has back tics and works

]

const [beverage, plant, fruit] = things;//insert variable name before this semi colon
