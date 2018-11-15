// Object.keys
// bitwise operators
const weightedLottery = (obj) =>{

  const weights = {
  green: 1,
  yellow: 2,
  red: 3
  }
  let weight = Object.values(obj)
  for i in range(weight):
    end.append(str(poss_values[random.randint(0, 15)]))
  print("#" + "".join(end))

}

const weights = {
  green: 1,
  yellow: 2,
  red: 3
}+

weightedLottery(weights)


random one in Java script
def hex_rand():
  poss_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
  end = []
  for i in range(6):
    end.append(str(poss_values[random.randint(0, 15)]))
  print("#" + "".join(end))
hex_rand()

// Jordans example

const weightedLottery = weights => {
  let containerArray = [];

  Object.keys(weights).forEach(key =>{
    for (let i = 0; i < weights[key]; i++) {
      containerArray,push(key);
    }
  })
  return containerArray[(Math.random() * containerArray.length) | 0];
}

const weights = {
  green: 1,
  yellow: 2,
  red: 3
}

weightedLottery(weights);


// Python below

// import numpy as np

// def weighted_lottery(weights):
//     container_list = []

//     for (name, weight) in weights.items():
//         for _ in range(weight): #underscore is to use with smaller formulas
//             container_list.append(name)

//     return np.random.choice(container_list)#np.random.choice

// #  weights = {
// #      'winning': 1,
// #      'losing': 1000
// #  }
// #
// #  print(weighted_lottery(weights))


// import numpy as np

// def weighted_lottery(weights):
//     container_list = []

//     for (name, weight) in weights.items():
//         for _ in range(weight): #underscore is to use with smaller formulas
//             container_list.append(name)

//     return np.random.choice(container_list)#np.random.choice

// #  weights = {
// #      'winning': 1,
// #      'losing': 1000
// #  }
// #
// #  print(weighted_lottery(weights))

// other_weights = {
//     'green': 1,
//     'yellow': 2,
//     'red': 3
// }

// print(weighted_lottery(other_weights))