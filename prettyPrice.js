// write a function that a variable equals the number rounded to the floor + .95
prettyPrice = (amount, decimal) => { console.log(`here is your pretty price ${Math.floor(amount)}.${decimal}`); }
prettyPrice(78.78, 95);


// Jordans Example

const pretty =  (grossPrice, extension) => {
  if (Number.isInteger(extension)) {
    extension = extension * 0.01;
  }
  return Math.floor(grossPrice) + extension;
}
prettyPrice(3.42, 0.99);
prettyPrice(3.42, 99);
