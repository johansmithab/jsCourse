function Person() { // Constructor/Class
    "use strict"; // This ensures properties and methods are not passed over to a different object in case we forget to use the new operator.
    this.name = "";
    this.lastName = "";
}

const person1 = new Person(); // Object from the constructor
console.log(person1);

const person2 = Person(); // Object from the constructor
console.log(person2);