Victor Laucas [4:22 PM]
@channel Homework!

You’ve done these exercises in python, now do them in javascript. Write all of these functions using the arrow function syntax
Write a function that generates a random hexadecimal color code 
Math.floor(Math.random() * 6) + 1  
for (var i = 0; i < players.length; i++) {
  console.log(players[i]);



def hex_rand():
  poss_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
  end = []
  for i in range(6):
    end.append(str(poss_values[random.randint(0, 15)]))
  print("#" + "".join(end))
hex_rand()
//
function Invoice(subTotal) {
  this.taxRate = 0.06;
  this.subTotal = subTotal;

  this.total = setInterval(() => {
    console.log((this.taxRate * this.subTotal) + this.subTotal);
    // console.log(this);
  }, 2000);
}

const inv = new Invoice(200);
inv.total();

// example from class
function ranCol () {
  const char ='0123456789ABCDEF'.split('');
  let hex = '#'
for (let i = 0; i < 6; i++) {
  hex += [Math.floor(Math.random() * 16)]//or chars.length
}
return hex;
console.log(ranCol)

Write a function that takes in a string and returns the letters in alphabetical order function(“Hi there”) // eehhirt

const string1 = "hi there"
const newString = 

split the string 
sort the string 
print the string

//  example from class
const order = str => {
  return str.split
}


// Write a function that takes in an object and prints all of the values inside of the given object

// make on object with values print all the values

arrow
student = (obj) => {
  console.log(Object.values(obj))
}
const obj = {
  name: 'Adrian Lebaron',
  age: 34,
  male: true,
  kids: "Zimri, Leena, Atlas, Tauvi"
};

student(obj)

const student = {
  name: 'Adrian Lebaron',
  age: 34,
  male: true,
  kids: "Zimri, Leena, Atlas, Tauvi"
};

console.log(Object.values(student));





Write a class called Student that accepts a name, email, and favorite programming language.
Write two static methods and two instance methods.
The first instance method should return the student’s name email and fav language
The second instance method should return the students’ favorite programming language
The two static methods should just console.log whatever you’d like :slightly_smiling_face:

class student {
  constructor({ name, email, favoriteProgramingLanguage = 'java script' }) {
      this.name = name;
      this.email = email;
      this.Language = favoriteProgramingLanguage;
  }
  greeting() {
      return(`I am ${this.name} my email is ${this.email} and my favorite programing language is ${this.favoriteProgramingLanguage}`)
  }
  language(){
    return(`${this.favoriteProgramingLanguage} is my fav. `)
  }

}
//Write your code here
const me = new student({name: "Adrian Lebaron", email: "adrianlebaron@gmail.com", favoriteProgramingLanguage: "java script"})
me.greeting()

const  you = new student ({Language: "python"})
you.language()


class solutions

Neil Myers [9:47 AM]
Untitled 
// // party on & chomp gnar
​
// Write a function that generates a random hexadecimal color code
const getRandomColor = () => {
 const chars ='0123456789ABCDEF'.split('');
 let hex = '#'
 for (let i = 0; i < 6; i++) {
  hex += chars[Math.floor(Math.random() * 16)];
 }
 return hex;
}
console.log(getRandomColor());
​
// Write a function that takes in a string and returns the letters in alphabetical order
// function(“Hi there”) // eehhirt
const order = str => {
 return str.split('').sort().join('');
}
console.log(order("lucas"))
​
// Write a function that takes in an object and prints all of the values inside of the given object
const one = (obj) => {
 console.log(Object.values(obj))
}
const obj = {
 key: "value",
 myKey: "my value",
 anotherKey: "antoher value"
};
​
one(obj)
​
​
​
// Write a class called Student that accepts a name, email, and favorite programming language.
// Write two static methods and two instance methods.
// The first instance method should return the student’s name email and fav language
// The second instance method should return the students’ favorite programming language
​
class Student {
 constructor({name, email, proglanguage}) {
  this.name = name;
  this.email = email;
  this.language = proglanguage;
 }
​
 renderDetails() {
  console.log(`${this.name}: ${this.email}: ${this.language}`);
 }
​
 renderDetailsTwo() {
  console.log(`${this.name}: ${this.language}`);
 }
​
 static welcome() {
  console.log('Hi there');
 }
​
 static disagree() {
  console.log('Come at me bro');
 }
}
​
const brody = new Student({name: 'Brody', email: 'brody@hotmail.com', proglanguage: 'JavaScript'});
​
// brody.renderDetails();
// brody.renderDetailsTwo();
Student.disagree();
Student.welcome();

// my work

const heading = {
  size: 2,
  title: 'hello'
}

const headingGen = ({ size, title }) => {
  console.log(`<h${size}>${title}</h${size}>`);
}

headingGen(heading);

const headingGenerator = (title, typeOfHeading) => {
  return `
  <h${typeOfHeading}>${title}</h${typeOfHeading}>`
}
headingGenerator('Greetings', 2); 
