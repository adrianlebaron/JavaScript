// How to Group Promises Together with Promise.all in JavaScript video
// https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1344

// Code
const greeting = new Promise((resolve, reject) =>{
  resolve('Hi there');
  reject('Oops, bad greeting');
});

const updateAccount = new Promise((resolve, reject) => {
  resolve('Updating last login...');
  reject('Error updating account with login.');
});

const loginActivities = Promise.all([greeting, updateAccount]);

loginActivities.then(res => {
  res.forEach(activity => {
    console.log(activity);
  })
})


