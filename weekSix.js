let arr = ['girls', 'kitchen', 'construction', 'boys'];

var last = arr.pop();
var first = arr.shift();

console.log(arr)

// Jordans

const removeFirstAndLast = arr => {
  if  (arr.length >= 3) {
    return arr.slice(1, -1);
  }else {
    throw new Error("you need at least three element in the array");
  }
}

removeFirstAndLast(['girls', 'kitchen', 'construction', 'boys'])
removeFirstAndLast([1, 2, 3, 4,5])