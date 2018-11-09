https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1154
// Guide to For Loops in JavaScript video




var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];

for (player in players) {
  console.log(players[player]);
}

for (var i = 0; i < players.length; i++) {
  console.log(players[i]);
}
// another example
// for (var i = 0; i < players.length; i++) {
//   console.log([i]);
// }

'''in prints out the index'''
for (element in players) {
  console.log(element)
}
'''of prints out the element or value'''
for (element of players)


players.forEach(function(element) {
  console.log(element);
});

// best practice
var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];

players.forEach(function(element) {
  console.log(element);
});