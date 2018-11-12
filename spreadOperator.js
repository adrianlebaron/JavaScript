// Guide to the JavaScript Spread Operator video
// https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1350

```Code```
// Combining Arrays
let shoppingCart = [345, 375, 765, 123];
let newItems = [98, 123];

shoppingCart.push(...newItems);
console.log(shoppingCart); // [345, 375, 765, 123, 98, 123]

// Copying Arrays
const shoppingCart = [345, 375, 765, 123];
const updatedCart = [...shoppingCart]; //shoppingCart.slice()
updatedCart.push(5);
console.log(updatedCart);
console.log(shoppingCart);


// using Math.max();

const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals));//if you do not have the spread operator it willl think it is just one value

// [1, 5, 1, 10, 2, 3]      this
// ...[1, 5, 1, 10, 2, 3]   pass in this
// 1, 5, 1, 10, 2, 3        turns into this  

const { starter, closer, ...relievers } = { //does not need to be called releivers
  starter: 'Verlander',
  closer: 'Giles',
  relief_1: 'Morton',
  relief_2: 'Gregerson'
}

console.log(starter);
console.log(closer);
console.log(relievers);


//exercise

function yourTest() {
  const highscore = [237.0198, 256.1, 234.846, 237.21, 256.654];
  
  return (Math.max(...highscore));
}

yourTest();