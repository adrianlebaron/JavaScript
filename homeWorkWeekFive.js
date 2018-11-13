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

Write a function that takes in a string and returns the letters in alphabetical order function(“Hi there”) // eehhirt

const string = "hi there"

split the string 
sort the string 
print the string


// Write a function that takes in an object and prints all of the values inside of the given object

// make on object with values print all the values

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
      this.favoriteProgramingLanguage = favoriteProgramingLanguage;
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

const  you = new student ({favoriteProgramingLanguage: "python"})
you.language()