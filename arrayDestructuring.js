https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1343

// How to Implement Array Destructuring in JavaScript video


const apiList = [
  'https://api.dailysmarty.com/posts',
  'https://api.github.com/users/jordanhudgens/repos',
  'https://api.github.com/users/jordanhudgens'
]

const [posts, repos, profile] = apiList;

console.log(posts);
console.log(repos);
console.log(profile);

// instead of using curly brackets on all print outs instead of console log on eac

console.log(
  ${posts}
  ${repos}
  ${profile}
);