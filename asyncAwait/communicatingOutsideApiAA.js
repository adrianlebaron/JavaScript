// Using Async / Await for Communicating with Outside APIs in JavaScript video

// https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1347

// Code
async function queryApis() {
  try {
    const postsPromise = fetch('http://api.dailysmarty.com/posts');
    const posts = await postsPromise.then(res => res.json());
    console.log(posts);
  } catch(err) {
    console.log(err);
    console.log('There was an error with the DailySmarty API');
  }

  try {
    const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
    const repos = await reposPromise.then(res => res.json());
    console.log(repos);
  } catch(err) {
    console.log(err);
    console.log('There was an error with the GitHub API');
  }
}

queryApis();