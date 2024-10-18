const readlineSync = require('readline-sync');

// 1. ES6 Classes
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.fullName}.`);
  }
}

const person = new Person('John', 'Doe');
person.sayHello();

// Question: How do ES6 classes differ from constructor functions in terms of their internal mechanism?
// Possible improvement: Add a static method to the Person class that creates a person object from a full name string.

// 2. Inheritance with ES6 Classes
class Employee extends Person {
  constructor(firstName, lastName, position) {
    super(firstName, lastName);
    this.position = position;
  }

  introduce() {
    console.log(`Hi, I'm ${this.fullName} and I work as a ${this.position}.`);
  }
}

const employee = new Employee('Jane', 'Smith', 'Developer');
employee.introduce();

// Question: What does the 'super' keyword do in the Employee constructor?
// Possible improvement: Implement a Manager class that extends Employee and has a method to assign tasks to other employees.

// 3. Static methods and properties
class MathOperations {
  static PI = 3.14159;

  static square(x) {
    return x * x;
  }

  static cube(x) {
    return x * x * x;
  }
}

console.log('PI:', MathOperations.PI);
console.log('5 squared:', MathOperations.square(5));
console.log('3 cubed:', MathOperations.cube(3));

// Question: When would you use static methods and properties instead of instance methods and properties?
// Possible improvement: Add a static method to calculate the volume of a sphere given its radius.

// 4. Private fields and methods (ES2022)
class BankAccount {
  #balance = 0;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }

  get balance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
console.log('Initial balance:', account.balance);
account.deposit(500);
console.log('After deposit:', account.balance);
const withdrawalSuccess = account.withdraw(200);
console.log('Withdrawal success:', withdrawalSuccess);
console.log('After withdrawal:', account.balance);

// Question: How do private fields improve encapsulation compared to the conventional underscore (_) naming convention?
// Possible improvement: Add a private method to log all transactions and a public method to retrieve the transaction history.

// 5. Mixins for multiple inheritance
const swimmable = {
  swim: function() {
    console.log(`${this.name} is swimming.`);
  }
};

const flyable = {
  fly: function() {
    console.log(`${this.name} is flying.`);
  }
};

class Duck {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Duck.prototype, swimmable, flyable);

const duck = new Duck('Donald');
duck.swim();
duck.fly();

// Question: How do mixins solve the problem of multiple inheritance in JavaScript?
// Possible improvement: Create a function that dynamically applies mixins to a class based on a configuration object.

// 6. Object observation with Proxy
const handler = {
  get: function(target, property) {
    console.log(`Accessing property: ${property}`);
    return target[property];
  },
  set: function(target, property, value) {
    console.log(`Setting property ${property} to ${value}`);
    target[property] = value;
    return true;
  }
};

const user = new Proxy({}, handler);
user.name = 'Alice';
console.log(user.name);

// Question: In what scenarios would using a Proxy be beneficial compared to direct object manipulation?
// Possible improvement: Implement a Proxy that validates property values before setting them.

// 7. Symbol as property keys
const uniqueKey = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};

console.log(obj[uniqueKey]);

// Question: How do Symbol keys differ from string keys in objects?
// Possible improvement: Create a function that uses Symbols to add "hidden" properties to an object that don't show up in for...in loops.

// 8. Advanced inventory system using classes and Map
class InventoryItem {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  get value() {
    return this.quantity * this.price;
  }
}

class Inventory {
  constructor() {
    this.items = new Map();
  }

  addItem(name, quantity, price) {
    if (this.items.has(name)) {
      this.items.get(name).quantity += quantity;
    } else {
      this.items.set(name, new InventoryItem(name, quantity, price));
    }
  }

  removeItem(name, quantity) {
    if (this.items.has(name)) {
      const item = this.items.get(name);
      if (item.quantity >= quantity) {
        item.quantity -= quantity;
        if (item.quantity === 0) {
          this.items.delete(name);
        }
        return true;
      }
    }
    return false;
  }

  getInventoryValue() {
    return Array.from(this.items.values()).reduce((total, item) => total + item.value, 0);
  }

  display() {
    console.log('Current Inventory:');
    for (const [name, item] of this.items) {
      console.log(`${name}: Quantity: ${item.quantity}, Price: $${item.price}, Value: $${item.value}`);
    }
    console.log(`Total Inventory Value: $${this.getInventoryValue()}`);
  }
}

const inventory = new Inventory();

inventory.addItem('apple', 10, 0.5);
inventory.addItem('banana', 5, 0.3);
inventory.addItem('orange', 8, 0.6);

inventory.display();

const itemToRemove = readlineSync.question('Enter an item to remove: ');
const quantityToRemove = parseInt(readlineSync.question('Enter quantity to remove: '));

if (inventory.removeItem(itemToRemove, quantityToRemove)) {
  console.log(`Successfully removed ${quantityToRemove} ${itemToRemove}(s).`);
} else {
  console.log(`Failed to remove ${quantityToRemove} ${itemToRemove}(s). Check if the item exists and if there's enough quantity.`);
}

inventory.display();

// Question: What are the advantages of using a Map instead of a plain object for storing inventory items?
// Possible improvement: Implement a method to apply a percentage-based discount to all items in the inventory.