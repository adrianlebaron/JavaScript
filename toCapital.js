
class capitalize {
  constructor(str){
    this.str = str;
    this.word = str.split;
  }
  function cap() {
  return this.word.charAt(0).toUpperCase();
  }
}
const ap = new capitalize(i am gratefull);
ap.cap();

// Jordans

const toCapital = str => {
  const words = str.split(" ");
  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
};

const shortStr = "Hi there";
toCapital(shortStr); // Hi There

const longStr = "the quick brown fox jumped over the lazy dog";
toCapital(longStr); // The Quick Brown Fox Jumped Over The Lazy Dog

// Victor Laucas [1:53 PM]
```const caps = str => {
  const fin = [];
  str.split(' ').forEach(word => {
    fin.push(word.split("")[0].toUpperCase() + word.slice(1))
  })
  return fin.join(" ")
}```


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map