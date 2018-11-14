// Introduction to JavaScript Promises video
// https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1341

let sleepyGreeting = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve("Hello.....")
  // }, 2000);              // if you comment this out like I did it will mimic an error

  setTimeout(() => {
    reject(Error('Too sleepy...'))
  }, 2000);
});

sleepyGreeting
  .then(data => {
    console.log(data);
  })

  .catch(err => {
    console.error(err);
  })


  // react makes this useless but there might be sometimes to use it

  Victor Laucas [10:57 AM]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

