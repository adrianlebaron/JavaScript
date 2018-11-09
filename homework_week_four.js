
/*Victor Laucas [4:30 PM]
@channel Homework!

Write a javascript function that adds two strings together
ex: stringAdder(“hi”, “there”) // returns “hi there”


Please reach out in the channel if you don’t understand something. @Neil Myers and I will be checking everyone’s homework tomorrow morning
*/

/*Write a JavaScript function to check whether an ‘input’ or argument passed into your function is a string or not
ex: stringChecker(“i am a string”) //returns True
stringChecker(100) //returns false*/

// var stringChecker = {"Adrian Lebaron"}

// function stringChecker() {
//   if (typeof stringChecker)
//   console.log("True")
// }

var stringChecker = 40;

switch (typeof stringChecker) {
  case "string":
    console.log("True");
    break;
  default:
    console.log('False');
}

// or

function stringChecker(str) {
  if(typeof str === "string") {
    return true
  } else {
    return false
  }
}

// function expression

var stringChecker = function (str){
  if(typeof str === "string") {
    return true
  } else {
    return false
  }
}

/*problem 2
Write a JavaScript function to capitalize the first letter of a string or argument.
ex: capitalizeString(“hi there”) // returns “Hi there”*/


str = 'i am grateful';
var firstl = str.charAt(0);
var restsen = str.slice(1, 100)
var start_sentance_UpperCase = firstl.toUpperCase() +restsen

start_sentance_UpperCase  

// or

function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

cap("hi there")

//function expression
var cap = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

cap("hi there")

//problem 3

/*Write a JavaScript function that accept two integers as arguments and returns the larger number.
ex: largerNumber(12, 9) // returns 12*/

// function olderguy(age1, age2) 
// return age1 > age2 ? age1 : age2;
// olderguy(14, 21)   forgot the brackets

function olderguy(age1, age2){
return age1 > age2 ? age1 : age2;
}
olderguy(14, 21)

// or

function largerNum(x, y) {
  if(x > y) {
    return x
  } else if (x < y) {
    return y
  } else {
    return("yo dawg those are the same")
  }
}
largerNum(94, 12)

//expression

var largerNum = function (x, y) {
  if(x > y) {
    return x
  } else if (x < y) {
    return y
  } else {
    return("yo dawg those are the same")
  }
}
largerNum(94, 12)

// problem 4

/*Write a javascript function that adds two strings together
ex: stringAdder(“hi”, “there”) // returns “hi there”*/

// var str1 = ("Adrian"


// var = str1.concat(str2);

function twoStings(str1, str2) {
  var two_strings = str1.concat(str2);
  console.log(two_strings)
}

twoStings("adrian", " lebaron")

// or

function addString(str1, str2) {
  // return str1.concat(" ").concat(str2)
  // return str1 + " " + str2
  return (`${str1} ${str2}`)
}

addString("hi", "there")

//expression
var twoStings = function (str1, str2) {
  var two_strings = str1.concat(str2);
  return (two_strings)
}

twoStings("adrian", " lebaron")