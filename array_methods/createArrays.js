// How to Create Arrays in JavaScript video

var generatedArray = new Array(3);
undefined
generatedArray
(3) [empty × 3]
generatedArray.length;
3
var generatedArray = new Array('Altuve', 'Correa', 'Spring');
undefined
generatedArray
(3) ["Altuve", "Correa", "Spring"]
var literalArray = [1, 2, 3];
undefined
literalArray
(3) [1, 2, 3]
var literalArray = ['Altuve', 'Correa', 'Spring'];

undefined
literalArray
(3) ["Altuve", "Correa", "Spring"]
literalArray.length
3
var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }, function greeting() { console.log('hey there');}]
undefined
mixedArray
(5) ["Hi", 1, Array(3), {…}, ƒ]0: "Hi"1: 12: Array(3)0: "a"1: "b"2: "c"length: 3__proto__: Array(0)concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()arguments: (...)caller: (...)length: 1name: "unshift"__proto__: ƒ ()[[Scopes]]: Scopes[0]values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Object3: name: "Kristine"__proto__: Object4: ƒ greeting()length: 5__proto__: Array(0)
mixedArray.length
5
literalArray[0]; 
"Altuve"
var playerName = literalArray[1];
undefined
playerName; // "Correa"
"Correa"
mixedArray[2][2]; // "c"
"c"
mixedArray[3]; 
{name: "Kristine"}
mixedArray[3].name;
"Kristine"
mixedArray[4];
ƒ greeting() { console.log('hey there');}
mixedArray[4](); 
VM746:1 hey there
undefined

// Guide to Adding and Removing Array Elements in JavaScript video
var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

arr.pop(); // "Springer"

arr; // ['Altuve', 'Bregman', 'Correa']

arr.push('Bagwell'); // 4

arr; // ['Altuve', 'Bregman', 'Correa', 'Bagwell']

arr.shift(); // ['Bregman', 'Correa', 'Bagwell']

arr.unshift('Kyle'); // 4

arr; // ['Kyle', 'Bregman', 'Correa', 'Bagwell']