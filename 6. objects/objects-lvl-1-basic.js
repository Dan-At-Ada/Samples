const readlineSync = require('readline-sync');

// 1. Creating objects using object literal notation
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  // Method in an object
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

console.log('Person object:', person);
console.log('Full name:', person.fullName());

// Question: How would you add a new method to the person object to calculate their birth year?
// Possible improvement: Implement a function that creates a person object with validation for age input.

// 2. Creating objects using constructor functions
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.displayInfo = function() {
    console.log(`${this.year} ${this.make} ${this.model}`);
  };
}

const myCar = new Car('Toyota', 'Corolla', 2020);
myCar.displayInfo();

// Question: What is the difference between using a constructor function and an object literal?
// Possible improvement: Add a method to the Car constructor that calculates the car's age based on the current year.

// 3. Object methods and 'this' keyword
const calculator = {
  value: 0,
  add: function(n) {
    this.value += n;
    return this;
  },
  subtract: function(n) {
    this.value -= n;
    return this;
  },
  getValue: function() {
    return this.value;
  }
};

console.log('Calculator result:', calculator.add(5).subtract(2).getValue());

// Question: Why do the add and subtract methods return 'this'? What does this enable?
// Possible improvement: Add multiplication and division methods to the calculator object.

// 4. Getters and setters
const temperature = {
  _celsius: 0,
  get fahrenheit() {
    return (this._celsius * 9/5) + 32;
  },
  set fahrenheit(value) {
    this._celsius = (value - 32) * 5/9;
  },
  get celsius() {
    return this._celsius;
  },
  set celsius(value) {
    this._celsius = value;
  }
};

temperature.celsius = 25;
console.log('25°C in Fahrenheit:', temperature.fahrenheit);
temperature.fahrenheit = 68;
console.log('68°F in Celsius:', temperature.celsius);

// Question: What are the benefits of using getters and setters instead of regular methods?
// Possible improvement: Add validation to the setter methods to ensure the temperature is within a realistic range.

// 5. Prototypal inheritance
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function(food) {
  console.log(`${this.name} is eating ${food}.`);
};

Animal.prototype.sleep = function() {
  console.log(`${this.name} is sleeping.`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(`${this.name} is barking.`);
};

const dog = new Dog('Buddy');
dog.eat('dog food');
dog.sleep();
dog.bark();

// Question: How does prototypal inheritance differ from classical inheritance in other programming languages?
// Possible improvement: Implement a Cat constructor that inherits from Animal and has a meow method.

// 6. this binding with call, apply, and bind
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const user = { name: 'Alice' };

greet.call(user, 'Hello');
greet.apply(user, ['Hi']);
const boundGreet = greet.bind(user);
boundGreet('Hey');

// Question: What are the key differences between call, apply, and bind?
// Possible improvement: Create a function that uses bind to create a countdown timer with a custom 'this' context.

// 7. Factory functions
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    sayHello: function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  };
}

const person1 = createPerson('Jane', 25);
person1.sayHello();

// Question: What are the advantages of using factory functions over constructor functions?
// Possible improvement: Modify the createPerson factory function to include private variables using closures.

// 8. Simple inventory system using objects
const inventory = {
  items: [],
  addItem: function(name, quantity) {
    this.items.push({ name, quantity });
  },
  removeItem: function(name, quantity) {
    const index = this.items.findIndex(item => item.name === name);
    if (index !== -1) {
      this.items[index].quantity -= quantity;
      if (this.items[index].quantity <= 0) {
        this.items.splice(index, 1);
      }
    }
  },
  displayInventory: function() {
    console.log('Current Inventory:');
    this.items.forEach(item => {
      console.log(`${item.name}: ${item.quantity}`);
    });
  }
};

inventory.addItem('apple', 5);
inventory.addItem('banana', 3);
inventory.displayInventory();

const itemToRemove = readlineSync.question('Enter an item to remove: ');
const quantityToRemove = parseInt(readlineSync.question('Enter quantity to remove: '));
inventory.removeItem(itemToRemove, quantityToRemove);

inventory.displayInventory();

// Question: How would you modify the inventory system to prevent negative quantities?
// Possible improvement: Add a method to update the quantity of an existing item in the inventory.