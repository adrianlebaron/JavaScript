// Differences Between Function Expressions and Function Declarations video

// decleration
function greeting(){
  return "Hi there!";
  }
  // next
function buildMenuTwo () {
  return "Another kids' menu";
  }
  
  console.log(buildMenu());
  console.log(buildMenuTwo());
  }
  
  // "Kid's menu"
  //"Another kids' menu"


// expression

var greetingTwo = function () {
  return 'Hi there again';
  };
  
  console.log(greeting());
  console.log(gretingTwo());
  
  //"Hi there!"
  //"Hi there again"

  // example 2
var greeting = function () {
  return "Hi there!";
 };
 
 var age = 4;
 
 if (age <= 10) {
   var buildMenu = function () {
     return "Kids' Menu";
   };
 
   function wrongMenuBuilder () {
     return "Wrong Kids' Menu";
   }
 
   console.log(buildMenu());
   console.log(wrongMenuBuilder());
 }