// How to Pass JavaScript Objects as Function Arguments by Leveraging Deconstruction video

// https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1265

const user = {
  name: 'Kristine',
  email: 'kristine@devcamp.com'
}

const renderUser = ({ name, email }) => {
  console.log(`${name}: ${email}`);
}

renderUser(user);

// curly brackets ar\e key for

Victor Laucas [10:08 AM]
```// Function declaration 
function myFunc() {
  console.log("I am a declaration");
}

// Function expression
myFunc = function() {
  console.log("I am an expression");
}

// Arrow function
myFunc = () => {
  console.log("I am an arrow function")
}

arrow = arg => console.log(`Your argument is ${arg}`);
// arrow = (arg, arg2) => {
//   console.log(`Your argument is ${arg}`)
// }
arrow("Hi")```


Victor Laucas [11:47 AM]
```const joe = {
  name: "Joe",
  email: "joe@joe.com"
}

const renderUser = (user) => {
  console.log(`${user.name}: ${user.email}`)
}
renderUser(joe)

const userRender = ({name, email}) => {
  console.log(`${name}: ${email}`)
}
userRender(joe)```

Message Input

// https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1266
// Guide to Adding Default Object Values to JavaScript Function Arguments

// Code
const blog = {
  title: 'My great post',
  summary: 'Summary of my post'
}

const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
  console.log(`
    og-title=${title}
    og-description=${summary}
  `);
}

openGraphMetadata(blog);

