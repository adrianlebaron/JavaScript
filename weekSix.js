// const removeFirstAndLast = arr => {
//   if  (arr.length >= 3) {
//     return arr.slice(1, -1);
//   }else {
//     throw new Error("you need at least three element in the array");
//   }
// }

// removeFirstAndLast(['girls', 'kitchen', 'construction', 'boys'])
// removeFirstAndLast([1, 2, 3, 4,5])

// https://rails.devcamp.com/full-stack-development-javascript-python/guide/1652
class ArrayPopper {
  constructor(arr) {
    this.arr = arr;
    this.atBeginning = true;
  }

  togglePopper() {
    this.atBeginning = !this.atBeginning;
    return this.atBeginning ? this.arr.pop() : this.arr.shift();
  }
}

const ap = new ArrayPopper([1, 2, 3, 4, 5]);

ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?