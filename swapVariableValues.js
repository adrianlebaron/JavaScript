// How to Swap Variable Values in JavaScript with Variable Deconstruction video

// https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1248

it("when those cars won't pick a lane", function() {
  expect(roadRage()).toEqual("That Honda and Chevy won't pick a lane");
});

// code

let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo;

playerOne = tempPlayerTwo;
playerTwo = tempPlayerOne;

[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);

// CODING EXERCISE
// Inside the below function, swap the values of right lane and left lane.
function roadRage() {
  let rightLane = "Chevy";
  let leftLane = "Honda";
  

  
  //Write your code here to make the cars switch lanes
  
  return (`That ${rightLane} and ${leftLane} won't pick a lane`)
}

roadRage();