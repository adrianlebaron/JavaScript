// Guide to JavaScript OOP Instance Methods video

// https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1268



```Code```
class Instructor {
  constructor({ name, role = 'assistant' }) {
    this.name = name;
    this.role = role;
  }

  renderDetails() {
    console.log(`${this.name}: ${this.role}`);
  }
}

const jon = new Instructor({name: 'Jon Snow'});
const brayden = new Instructor({name: 'Brayden', role: 'teacher'});
jon.renderDetails();
brayden.renderDetails();


// CODING EXERCISE
// You're in the market for a new car but want it to be electric. 
// Create an instance of the Car class called model3. 
// The year must be a number (so don't wrap it in quotation marks). 
// Set the brand to "Tesla" and change the poweredBy to "electricity".

class Car {
	constructor({ year, brand, poweredBy = 'gas' }) {
		this.year = year;
		this.brand = brand;
		this.poweredBy = poweredBy;
	}

	carSpecs() {
		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`)
	}
}

//Write your code here

const model13 = new constructor({year: 2018, brand: "tesla", poweredBy: "electricity"})
model13.carspecs

Victor Laucas [3:46 PM]
```class Car {
    constructor({ year, brand, poweredBy = 'gas' }) {
        this.year = year;
        this.brand = brand;
        this.poweredBy = poweredBy;
    }

    carSpecs() {
        return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`)
    }
}

//Write your code here

const model13 = new Car({year: 2018, brand: "tesla", poweredBy: "electricity"})
model13.carSpecs()```

You weren’t instantiating your class properly

`const model13 = new constructor` should be `const model13 = new Car`