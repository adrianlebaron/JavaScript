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