// Introduction to Object Oriented Programming in JavaScript video

// https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1267

```Code```
class Instructor {
  constructor({ name }) {  // constructor no matter what you call this function it is the first function so it is a constructor
    this.name = name;
  }
}

const jon = new Instructor({ name: 'Jon Snow' });
console.log(jon.name);


// CODING EXERCISE
// Create a class, named Account, that has properties for a username and password. 
// Then instantiate a new object called user and set the username and password to what ever you like.

class Account {
  constructor({username, password}){
  this.username = username;
  this.password = password
  }
  }
  
  const user = new Account({username: "joe smoe", password: "asdfasdf"})
  console.log(user.password)
  