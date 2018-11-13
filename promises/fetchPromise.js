// Using a fetch Promise to Communicate with APIs in JavaScript video
// https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1342


console.log('Starting fetch call');
const postsPromise = fetch('https://api.dailysmarty.com/posts')
console.log('After fetch call');
console.log('postPromise);
console.log('After program has run');

postsPromise
  .then(data => data.json())
  .then(data => {
    data.posts.forEach((item) => {
      console.log(item.url_for_post);
    })
})
.catch((err) => {
  console.log(err);
})