const list = [1, 2, 3, 4, 5, 6,]

list = ((length=len(list)), getSum(total, num) ) => { 
  console.log(len(list) / sum(list))
}
list(1, 2, 3, 4, 5)


const getAverage = arr => {
  // sum the values from the array
  // get the length of the array
  // divide the array  sum by the length
}

const getAverage = arr => {
  // sum the values from the array
  const reducer = (total, currentValue) => total + currentValue;
  const sum = arr.reduce(reducer);
  return sum;
  // get the length of the array
  // divide the array  sum by the length
}

getAverage([1, 2, 3]);//? 6


const getAverage = arr => {
  // sum the values from the array
  const sum = arr.reduce((total, currentValue) => total + currentValue);
  return sum;
  // get the length of the array
  // divide the array  sum by the length
}

getAverage([1, 2, 3]);//? 6

const getAverage = arr => {
  // sum the values from the array
  const reducer = (total, currentValue) => total + currentValue;
  const sum = arr.reduce(reducer);
  // return sum;
  // get the length of the array
  // retun arr.length
  // divide the array  sum by the length
  return sum / arr.length
}