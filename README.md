# HTML Course Notes

## **Initial Concepts**

```html
<body>
    <!-- Opening and closing tags -->
    <h1></h1>

    <!-- HTML element -->
    <h1>Hello World!</h1>

    <!-- Paragraphs -->

    <p>This is the first paragraph</p>
    <p>This is the second paragraph</p>

    <!-- Self-colsing Elements / Void Element -->    
    
    <p>
    This is the first line of the first paragraph,<br /> <!-- Horizontal Rule -->
    and this is the second one.
    </p>
    <hr />  <!-- Horizontal Rule -->
    <p>This is the second paragraph</p>

    <ol>
        <li> One </li>
        <li style="color: red;"> Two </li>
        <li> Three </li>
    </ol>
</body>
```

## **Additional Concepts**

```html
<body>
    <!-- These are lists -->
    
    <!-- Unorder List -->
    <ul>
        <li> One </li> <!-- List Item -->
        <li> Two </li>
    </ul>

    <!-- Order List -->
    <ol>
        <li> One </li>
        <li> Two </li>
        <li> Three </li>
    </ol>
</body>
```

## **Nesting and Indentation**

```html
<body>
    <!-- Embedded Lists -->
    <ul>
    <li>1</li>
    <li>2</li>
        <ul>
            <li>2.1</li>
                <ol>
                    <li>A</li>
                    <li>B</li>
                </ol>
            <li>2.2</li>
        </ul>
    </ul>
</body>
```

## **Attributes**

```html
<body>
    <!-- Anchor Elements -->
    <a href="https://www.google.com">Google</a> <!-- <tag attribute=value></tag> -->
    <a href="https://www.google.com"><img src="url" alt="image"/></a> <!-- Links can also be used with images -->
    <a href="https://www.google.com" target="_blank">Google</a> <!-- target values: _blank, _parent, _self, _top-->

    <!-- There are also global attributes such as "draggable" -->
    <p draggable="true">Drag Me!</p>

    <!-- Image Element -->
    <img src="url" alt="alternative text description"/>
</body>
```

## **Computer File Paths**

* **MacOS:** `root/folder/file/`.
* **Absolute:** It starts from the root e.g., `/Users/johanavendano/hansDev/jsCourse/diceActivity`.
* **Relative:** They start from a relative folder/file `jsCourse/diceActivity`
  * `../`: It goes up one level from the current directory and looks for a different item therein.
  * `./`: It stays at the current directory and looks for a different item.

## **HTML Boiler Plate**

```html
<!DOCTYPE html> <!-- Version of HTML -->
<html lang="en"> <!-- Root of the code / lang="en" refers to the language-->
<head> <!-- Area with important info not visible for the user -->
    <meta charset="UTF-8"> <!-- Ensures that characters are displayed correctly -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Keeps our code compatible / Deprecated -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- It says how to display our content to the browser -->
    <link rel="stylesheet" href="index.css">
    <title>Document</title> <!-- Text displayed on the site top tab -->
</head>
    <body> <!-- Content of the website will be here -->
    </body>
</html>
```

## **Capstone Project**

* A Capstone Project ​is a multifaceted body of work that serves as a culminating academic and intellectual experience for students.
  
  > **Create a webpage with your resume/portfolio**.

# CSS Course Notes

* Cascading Style Sheet.

## **Integration CSS and HTML**

### **Inline: Element**

```html
<ul>
    <li style="color: red;">1</li> <!-- You can set a style with the style attribute -->
    <li>2</li>
<ul>
```

### **Internal: Webpage**

```html
<head>
    <style>
        h1{
            color: red;
        }
    </style>
    <body>
        <h1>Hello World!<h1>
    </body>
<head>
```

### **External: Website and its webpages**
```html
<head>
    <!-- It is IMPORTANT that the CSS connection is located within the head and at the very bottom of our HTML code, in order for the browser to run it properly -->
    <link rel="stylesheet" href="styles.css">
</head>
```
## **CSS Selectors**

```css
/* Element Selector */
h1 { 
    color: blue;
}

/* Class Selector: It can be used with different elements */
.red-text {
    color: red;
}

/* ID Selector: It identifies a unique element */
#green-text {
    color: green;
}

/* Attribute Selector: It selects all same elements with same attribute and/or value */
p[draggable="true"] {
    color: blue;
}

/* Universal Selector: It selects all the HTML elements */
* {
    color: green;
}
```

## **CSS Properties and Values**

* **Pixel:** 1px = 1/96th inch / 0.26mm.
* **Point:** 1pt = 1/72nd inch / 0.35mm.
* 1em = 100% of parent (e.g., `body`, `p`, `footer`).
* 1rem = 100% of root (i.e., `html`).

```css
h1 {
    color: red;
    background-color: black, #202020, rgb();
    font-size: 1rem;
    font-weight: bold, bolder, 100-900;
    /* fonts.google.com */
    font-family: Helvetica, sans-serif, "Times New Roman";
    text-align: center;
}
```

## **Box Model Marging, Padding and Border**

![Box Model](../jsCourse/img/boxModel.png)

<!-- <img src="../jsCourse/img/boxModel.png"
     alt="Box Model"
     style="float: left; margin-right: 10px;" /> -->

* `<div></div>`: This tag divides the content into different boxes.

## **CSS Specifity and Inheritance**

* Importance: `color: red; | color: green !important;`
* Type: `<link rel="" href=""> | <style></style> | <h1 style="">Hello</h1>`
* Specifity: `li {color: yellow;} | .first-class {color: orange;} | li[draggable] {color: red;} | #first-id {color: blue;}`
* Position: `li {color: red; color: blue;}`

## **Combining CSS Selectors**

```css
.inner-box p {
    color: white;
}

/* Group Rule */
h1, h2, .inner-box {
    color: red;
}

/* Child Rule: Used for children -> Parent */
.box > p {
    color: red;
}

/* Descendant Rule: Used for grand-children -> Ancester */
.box li {
    color: red;
}

/* Chaining Rule: Apply when ALL selectors are true */
h1#title.big.heading {
    color: red;
}

/* Combining Combiners Rule */
h1#title.big.heading .inner-box .box > li{
    color: red;
}
```

## **CSS Positioning**

* Static: Default position.
* Relative: Relative to its default position.
* Absolute: Releative to the nearest positioned ancestor or top left corner of webpage.
* Fixed: Position relative to top left corner of browser window.
* Sticky:
* Z-index: Determines which element should be infront – Z cordinate –.

![CSS Positioning](../jsCourse/img/CSS%20Positioning%201.png)

![CSS Positioning](../jsCourse/img/CSS%20Positioning.png)


# JavaScript Course Notes
## Functions / Methods

* **console.log()**
* **document.write()**
* **window.alert() / alert()**
* **typeof()**
* **prompt()**
* **slice():** Splits a string into its characters. The first parameter indicates where to start and the second one where to end.
* **toUpperCase():** Capitalizes each character of a string.
* **toLowerCase()**
* **Math.floor():** This method rounds a number down to the nearest integer.
* **Math.round():** It rounds a decimal to the most accurate integer.
* **Math.pow(base, exponent):** It calculates exponents.
* **Math.random():** It calculates a random number between 0-0,99999999...
* **includes():** It ooks for an item within a list and returns a boolean variable – i.e., true or false –.
___
## Data Types

### String

* **String Interpolation:**

  * **What is `${}` in JS?:** A placeholder is represented by `${}` , with anything within the curly brackets treated as JavaScript and anything outside the brackets treated as a string: ``const method = 'interpolation' const dynamicString = `This string is using ${method}``.

```javascript
// Strings InLine:
    const background = "red";
    const color = "white";

    const isAuthorized = true;

    const button = document.createElement("button");
    button.innerText = "click me";

// String interpolation can be used with variables and also with conditionals: e.g., "?" means "then", and ":" means "else":

    button.style = `background: ${background}; color: ${color}`; 
    button.style = `background: ${isAuthorized ? "blue" : "red"} ; color: ${color}`;

    document.body.append(button);
```

### Integers

```javascript
// 123
```

### Boolean

```javascript
// True or False
```
### Array

```javascript
// Creating an Array:
var eggs = [0,1,2,3];

// Retrieving a Value From an Array:
var myEgg = eggs[1];

// The array.includes() function looks for an item within a list and returns a boolean variable – i.e., true or false –.

var guestList = ["Johan", "Mario", "Ivan", "Stick"];
var guestName = prompt("What is your name?");
var validGuest = guestList.includes(guestName);
if (validGuest === true){
    alert("Welcome " + guestName + "!");
}else{
    alert("Sorry, " + guestName + ". It seems you do not have an account yet.");
}

// Reading an Array with For:
const names = ["Ivan", "Stick", "Mario", "Johan"];

for(let i = 0; i < names.length; i++){
    const name = names[i];
    console.log(name);
}

// Reading an Array with forEach():
const names = ["Ivan", "Stick", "Mario", "Johan"];

names.forEach(function(name){ // It expects a function, and takes each elemet of a list as a parameter.
    console.log(name);
})

// Reading an Array with map(function):
const names = ["Ivan", "Stick", "Mario", "Johan"];

const newNames = names.map(function(name){ // This function returns a new array.
    return `Hola ${name}`;
})
console.log(newNames);

// Or:
const newNames = names.map(name => `Hola ${name}`);
console.log(newNames);

// Reading an Array with find():
const names = ["Ivan", "Stick", "Mario", "Johan"];

const nameFound = names.find(function(name){ // This function looks for a specific value and returns it if found.
    if(name === "Johan"){
         return name;
    };
})
console.log(nameFound);

// Reading an Array with filter():
console.log(newNames);

// Reading an Array with find():
const names = ["Ivan", "Stick", "Mario", "Johan"];

const nameFiltered = names.filter(function(name){ // This function filter the results and creates a new array with the returns.
    if(name !== "Johan"){
         return name;
    };
})
console.log(nameFiltered);


// Concat():
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3); // Expected output: Array ["a", "b", "c", "d", "e", "f"]


// Spread Operator:
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));// It reads each item of an array. Expected output: 6
console.log(sum.apply(null, numbers)); // Expected output: 6
```
___
## Variables / Attributes

### ACTIVITY 1:

var is used to declare a new variable and it's no longer needed when a variable already exists:

```javascript
    function test() {
        var a = "3";
        var b = "8";
        
        var c = a;
        a = b;
        b = c;

        console.log("a is " + a);
        console.log("b is " + b);
    }

    test();
```

### ACTIVITY 2:

```javascript
var firstName = "Johan";
var secondName = prompt("What is your name?");
alert("Your names are " + firstName + " " + secondName);
```

### ACTIVITY 3:

Use the .length string property to get the # of characters of a word: e.g., name.length;,

```javascript
var text = prompt("Write somethig within 1-140 characters!")
var textLetters = text.length;
var lettersLeft = 140 - textLetters;
alert("You have written " + textLetters + " characters. You have " + lettersLeft + " characters left.");
```

### ACTIVITY 4:

Use the function .slice() to split a string into its characters. The first parameter indicates where to start and the second one where to end.
Always remember to start counting from 0.

#### 4.1:

```javascript
var name = "Johan";
var shortenName = name.slice(1, 2);
console.log(shortenName);
```

#### 4.2:

```javascript
// Option 1:
alert(prompt("Write somethig within 1-140 characters!").slice(0, 140));

// Option 2:
var text = prompt("Write somethig within 1-140 characters!").slice(0, 140);
   alert(text);

// Option 3:
var text = prompt("Write somethig within 1-140 characters!");
   var shortenText = text.slice(0, 140);
   alert(shortenText);
```

### ACTIVITY 4:

```javascript
// Basic Arithmetic:

var a = 1+2;
var b = 1-2;
var c = 1*2;
var d = 1/2;
var e = 1%2;

// Advise: Use parenthesis to indicate what should be done first.

var cost = 3+(5*2);
```

```javascript
// Dog Age:

var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("If your dog were a human it would be " + humanAge + " years old!");
```

### ACTIVITY 5:

```javascript
var x  = 5;
x++; // x =  x+1; -> Increment Expression
x--; // x =  x-1; -> Decrement Expression

// It also works with different values, other variables and different arithmetic expressions.

x/=2; // x =  x/2;
x*=y; // x =  x*y;
```
___
## Functions:

### Activity 1: Robot

```javascript

```

### Activity 2:

```javascript
function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    alert("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

var age = prompt("What is your age?");
lifeInWeeks(age);
```

### Activity 2:

#### 2.1: Milk Bottles.

```javascript
// Inputs and Outputs for Functions.

// Return: Indicates where the function will end up and what is the value that will be return as a result of the function.

// The Math.floor() method rounds a number down to the nearest integer.

function getMilk (costPerBottle, startingMoney) {
    return numOfBottles = startingMoney % costPerBottle;
}

function calBottles(costPerBottle) {
    numOfBottles = getMilk(costPerBottle, startingMoney);
    return totalCost = numOfBottles * costPerBottle;
}

var costPerBottle = 1.5;
var startingMoney = prompt("How much money do you have?");
var change = getMilk(costPerBottle, startingMoney);
var  total = calBottles(costPerBottle);
console.log("You can buy: " + numOfBottles + ", which will cost: " + total + ", and your change will be: " + change + ".");
```

#### 2.2: BMI Calculator.

```javascript
// The Math.round() method rounds a decimal to the most accurate integer.

// The Math.pow(base, exponent) method calculates exponents.

function bmiCalculator(weight, height){
    var bmi = Math.round(weight / (Math.pow(height, 2)));
    return bmi;
}
var weight = prompt("What is your weight?")
var height = prompt("What is your height?")
var bmi = bmiCalculator(weight, height);
alert("Your BMI is: " + bmi)
```
___
## Conditionals:

### Activity 1: if - else.

```javascript
// === -> It's equal to;
// !== -> It's different to;
// > -> It's greater than;
// < -> It's lesser than;
// >= -> It's greater or equal to;
// <= -> It's lesser or equal to;

// && -> and;
// || -> or;
// ! -> not;

// IMPORTANT: "===" compares if values are equal or not including their type. "==" only compares the values.

a = 1;
b = "1";

if ( a === b){
    console.log("yes");
}else{
    console.log("no");
}

// For === it would be "no", but for == it would be "yes".
```

#### 1.1: Love Score.

```javascript
// Math.random function calculates a random number between 0-0,99999999...

prompt("What is your name?");
prompt("What is their name?");
var loveScore = Math.floor(Math.random() * 100) + 1;
if (loveScore > 70){
    alert("Wow your love score is: " + loveScore + "%.");
}else{
    alert("Your love score is: " + loveScore + "%. You should continue working on that.")
}
```
#### 1.2: Intermidiate BMI Calculator.

```javascript
function bmiCalculator(weight, height){
    var bmi = weight / (Math.pow(height, 2));
    if(bmi>24.9){
        interpretation = console.log("Your BMI is " + Math.floor(bmi) + ", so you are overweight.");
    }
    if(bmi>=18.5 || bmi<=24.9){
        interpretation = console.log("Your BMI is " + Math.floor(bmi) + ", so you have a normal weight.");
    }if(bmi<18.5){
        interpretation = console.log("Your BMI is " + Math.floor(bmi) + ", so you are underweight.");
    }
    return interpretation;
}
var weight = prompt("What is your weight?")
var height = prompt("What is your height?")
bmiCalculator(weight, height);
```

#### 1.3: Leap Year.

```javascript
```
___
## Loops:

### While: State

```javascript
var i = 1;
while(i<2){
    console.log(i);
    i++;
}
```

### For: Iteration

```javascript
for(i=0; i<2; i++){ // start; end; change.
    console.log(i);
    // i++ -> You can also declare the iterator here, but syntactic sugar is preferred.
}
```
___
## Integration JS and HTML/CSS

### Internally:

```html
<body>
    <script type="text/javascript">
        alert("Hello World!");
    </script>
</body>
```

### Externally:

```html
<body>
    <!-- It is IMPORTANT that the JS connection is located within the body and at the very bottom of our HTML code, in order for the browser to run it properly -->
    <script src="index.js"></script>
</body>
```
___
## DOM: Document Object Model

### **What is a DOM?**

* It is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic. The DOM views an HTML document as a tree of nodes. A node represents an HTML element.

  * The HTML DOM can be accessed with JavaScript (and with other programming languages).
  * In the DOM, all HTML elements are defined as objects.
  * The programming interface is the properties and methods of each object.
  * A property is a value that you can get or set (like changing the content of an HTML element).
  * A method is an action you can do (like add or deleting an HTML element).

### **HTML Code that will be manipulated:**

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">

  </head>
  <body>

    <h1>Hello</h1>

    <input type="checkbox">

    <button>Click Me</button>

    <ul>
      <li class="list">
        <a href="https://www.google.com">Google</a>
      </li>
      <li class="list">Second</li>
      <li class="list">Third</li>
    </ul>
  <script type="module" src="index.js" charset="utf-8"></script>
  </body>

</html>
```

### **Manipulating Objects:**

```javascript
// This path allows me to navigate betwwen different elements of a webpage.
var heading = document.firstElementChild.lastElementChild.firstElementChild;

// The innerHTML manipulates an HTML element.
heading.innerHTML = "Good Bye!";

// The style manipulates an HTML element CSS.
heading.style.color = "red";

// The querySelector() method returns the first element that matches a CSS selector.
// To return all matches (not only the first), use the querySelectorAll() instead.
// Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.

document.querySelector("input").click(); // click() is an action -> method.

// To get a property:
car.color;

// To set a property:
car.numOfDoors = 0;

// To call a method:
car.drive();

// Samples:
var newLi = document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Johan";
```

### **Selecting HTML Elements with JS**

```javascript

// The word "elements" mean that an array will be returned.

document.getElementsByTagName("li"); // This retrieves the elements and returns them as an array.
document.getElementsByTagName("li")[2].style.color = "purple"; // This change the color of a specific item within the array.
document.getElementsByTagName("li").length; // It prints the array length.
document.getElementsByClassName("btn")[0].style.color = "red"; // This returns an array, so you also have to select the item you want to referred.
document.getElementById("title").innerHTML = "Good Bye"; // Here I am getting a single item.

// Selectors: CSS = #: IDs, .: Classes / HTML = labels: Other Items.
document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("h1");

document.querySelector("li a"); // Expected output: "https://www.google.com".
document.querySelector("#list a"); // Expected output: "https://www.google.com".

document.querySelector("li.item");

document.querySelector("#list .item"); // Here I will only get the first item that satisfied the selector.
document.querySelectorAll("#list .item"); // Here I will get all the items that satisfied the selector.
document.querySelectorAll("#list .item")[2]style.color = "blue"; // Here I can set a property.

// Sample:
document.querySelector(".list a").style.color = "yellow";
document.querySelector("li a").style.color = "yellow";
```

### **Manipulating and Changing Styles of HTML Elements with JS**

* **Making Style Changes on CSS**

```css
button{
  background-color: yellow;
}
```

* **Making Style Changes on JS**

```javascript
document.querySelector("#btn").style.backgroundColor = "yellow";
```

### **Separation of Concerns**

* HTML -> Content 
* CSS -> Style
* JS -> Behavior

```css
.invisible{
    visibility: hidden;
}

.huge{
  font-size: 10rem;
  color: orange;
  font-weight: bold;
}
```

```javascript
// classList property retrives all the classes associated with a particular element.
document.querySelector("button").classList;

// This add a new class
document.querySelector("button").classList.add("invisible");

// This add a new class
document.querySelector("button").classList.remove("invisible");

// This toggle off and on a new class (true, false)
document.querySelector("button").classList.toggle("invisible");

// Sample:
document.querySelector("h1").classList.add("huge");
```

### **Manipulating the Text Content Property**

```javascript
// innerHTML returns the whole HTML that is inside the element we are referring to.
document.querySelector("h1").innerHTML = "Good Bye!"; // Output: <strong>Hello</strong>
document.querySelector("h1").innerHTML = "<em>Good Bye!</em>";

// innerText only returns the text that is inside the element we are referring to.
document.querySelector("h1").textContent = "Good Bye!"; // Output: Hello
```

### **Manipulating HTML Element Attributes**

```javascript
document.querySelector("a").attributes; // Looks for the attributes of an element.
document.querySelector("a").getAttribute("href"); // Looks for a specific attribute.
document.querySelector("a").setAttribute("href", "https://www.bing.com/"); // Set a new attribute to an element.
```

## **OOP (Object-oriented Programming) Paradigm**

* Programming parading focus on objects instead of functions `{}`.

### **Objects**

![JS Objects](../jsCourse/img/JS%20Objects.png)

OOP (Object-Oriented Programming) - It tries to model a real-life object.

**Classes and Objects:**

* **Primitive Variable Types:** `byte, short, int, long, float, double, char, boolean`.

* **Object**: `typeof new String("Hello);`

* **Classes** are essentially a template/blue-print(human) to create your objects (waiter and waitress): First letter must be capitilize

  * `CarBlueprint() - Pascal Case`

* **Objects** are an encapsulation of variables(AKA attributes) and functions(AKA methods) into a single entity. Objects get their variables and functions from classes(blue-print):

  * `car = CarBlueprint()`

#### **Example:**

  * Class -> Object: variables/properties/attributes and functions/methods

  * Waiter: --> Object

    * **Has:** tables_responsible = [4,5,6] --> Attributes
      * To access these attibutes: `waiter.tables_responsible`

    * **Does:** `function take_order(table, order): {}` --> Methods
      * To access these methods: `waiter.take_order()`

```javascript
console.log({}); // Literal Object

// Sample #1:

let name = "Johan";
let lastName = "Smith";
let age = 25;

const user = {
    // Key-value pairs
    name: "Johan", // Properties
    lastName: "Smith",
    age: 25,
    hobbies: ["reading", "coding", "Working-out"],
    address: {
        street: "Some Street",
        city: "London",
    },
    showFullName() { // Method
        return "Mario Marcelo"
    }
}

console.log(user.showFullName());

// Sample #2:

// this: It grabs the values of an object.

const user = {
    // Key-value pairs
    name: "Johan", // Properties
    lastName: "Avendaño",
    age: 25,
    hobbies: ["reading", "coding", "Working-out"],
    address: {
        street: "Some Street",
        city: "London",
    },
    showFullName() { // Method
        return `${this.name} ${this.lastName}`
    }
}

console.log(user.showFullName());
```

### **Constructors**

* It allows as to automatically create objects. It is like the class verison of JS.

```javascript
// Constructor

function Person() {
    this.name = "",
    this.lastName = "",
    this.age = 0,
    this.showFullName = function() {
        return `${this.name} ${this.lastName}`
    }
}

const newUser = new Person() // new creates a new object.
newUser.name = "Ivan"
newUser.lastName = "Sisa"
newUser.age = 30
console.table(newUser)
console.log(newUser.showFullName())

// Object() returns an empty object.

const person = new Object(); // This was used to create an object called person.
console.log(person.constructor);

// Creating an object.

const string = new Object("Hello World");
string.objectTest = function () {
    return `${this} Object Test`
};

console.log(string.objectTest());

// Reading keys and values of an object.

const user = {
    name: "Johan",
    lastName: "Avendaño",
    age: 25,
    showFullName() {
        return `${this.name} ${this.lastName}`
    }
}

console.log(Object.keys(user))
console.log(Object.values(user))

// new: The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

function Person() { // Constructor/Class
    "use strict"; // This ensures properties and methods are not passed over to a different object in case we forget to use the new operator.
    this.name = "";
    this.lastName = "";
}

const person1 = new Person(); // Object from the constructor
console.log(person1);

const person2 = Person(); // Object from the constructor
console.log(person2);

// Prototype: It refers to the structure of a constructor.

// JS is a Prototype OOP Language.

function Person(name, lastName) {
    "use strict";
    this.name = name;
    this.lastName = lastName;
    this.showName = function () {
        return `${this.name} ${this.lastName}`;
    };
};

const person1 = new Person("Johan", "Smith");
const person2 = new Person("Mario", "Marcelo");
const person3 = new Person("Ivan", "Sisa");
const person4 = new Person("Stick", "Diaz");

Person.prototype.greet = function () {
    return `Hello this is ${this.name} ${this.lastName}`;
};

Person.prototype.age = 25; // Prototype allows as to add attributes and methods to a constructor.

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

console.log(person1.greet());
console.log(person2.greet());
console.log(person3.greet());
console.log(person4.greet());

console.log(person1.age);
console.log(person2.age);
console.log(person3.age);
console.log(person4.age);
```

### **Classes**

```javascript
// Constructor
function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

// Class
class Person { // Syntactic Sugar
    constructor(name, lastName) { // Method that returns properties
        this.name = name;
        this.lastName = lastName;
    }

    greet() {
        return `Hello this is ${this.name} ${this.lastName}`;
    }
}

const person1 = new Person("Johan", "Smith");
console.log(person1.greet());
```

### **OO Requirements**

![OO Requirements](./img/OO%20Requirements.png)

* **Association**

```javascript
class Person { // Syntactic Sugar
    constructor(name, lastName) { // Method that returns properties
        this.name = name;
        this.lastName = lastName;
    }
}

const user1 = new Person("Johan", "Smith");
const user2 = new Person("Mario", "Marcelo");

user2.boyfriend = user1; // This is a relation

console.log(user1);
console.log(user2);
```

* **Aggregation**

```javascript
const company = { // Aggregate
    name: "HanSDev Corp",
    employees: [],
}

class Person { // Syntactic Sugar
    constructor(name, lastName) { // Method that returns properties
        this.name = name;
        this.lastName = lastName;
    }
}

const user1 = new Person("Johan", "Smith"); // Component
const user2 = new Person("Mario", "Marcelo");

company.employees.push(user1);
company.employees.push(user2);

console.log(user1);
console.log(user2);

console.log(company);
```

* **Composition**

```javascript
const person = {
    name: "Johan",
    lastNAme: "Smith",
    address: { // This component does not have independence because is strongly related to person.
        street: "Square Street",
        city: "Bogota",
    }
}
```

### **OOP Principles**

![OO Principles](./img/OO%20Principles.png)

* **Encapsulation**

* Concentrate data and functions hiding internal details.

```javascript
function Company(name) {
    let employees = []; // This is a primitive var
    this.name = name; // This is a property of the constructor

    this.getEmployee = function () {
        return employees;
    };

    this.addEmployee = function(employee) {
        employees.push(employee);
    };

};

const company1 = new Company("HansDev Corp");
console.log(company1);

company1.addEmployee({name: "Johan"});
console.log(company1.getEmployee());
```

* **Inheritance**

* Create a specialized object starting from a general one.

> **With a Constructure:**
![Inheritance with a Constructure](./img/Inheritance%201.png)

> **With a Class:**
![Inheritance with a Constructure](./img/Inheritance%202.png)

* **Polymorphism**

* Handle multiple data types uniformly.

> **Benefits:**
![Polymorphism Benefits](./img/Polymorphism%20Benefits.png)

* **Subtype Polymorphism**

___
# JS Concepts for React.js

## Functions:

```javascript
// They can return a normal output:
function hello(){
   return console.log("Hello World!");
}
hello();

function hello(){
   return true;
}
hello();

// They can also return objects:

function hello(){
   return {name: "Johan"};
}
hello();

// They can also return other functions: This is possible because JS allows Functional Programming a sit is a multi-paradigm scripting language, which means that it is very dynamic in nature and supports various types of programming styles, such as object-oriented, imperative, and functional programming:

function hello(){
   return function(){
        return "Hello World!";
   }
}
console.log(hello());

// And its outputs:

function hello(){
   return function(){
        return "Hello World!";
   }
}
console.log(hello()());

// Receiving Parameters:

    // One Parameters:

    function hello(name){
        return "Hello " + name;
    }
    console.log(hello("Johan"));

    // Multiple Parameters:

    function add(x, y){
        return x+y;
    }
    console.log(add(20, 10));

    // Default Parameters:

    function add(x = 23.3, y= 0){
        return x+y;
    }
    console.log(add(20, undefined));

// Anonymous Functions:
    console.log(function(){
        return "Starting...";
    }());

    // With elements:
    const button = document.createElement("button");
    button.innerText = "click me";

    button.addEventListener("click", function(){
        alert("You clicked a button!");
    })

    document.body.append(button);

// Arrow Functions:

    const add = (x, y) => { // It the same as: function(){}
        return x+y;
    };

// Inline Arrow Functions:

    const showText = () => "Hello World!"; // This is the function return/output.
    
    const showObject = () => ({name: "Johan"}); // This syntax is specifically to return objects.

    console.log(showText());
    console.log(showObject());

    //With conditionals:
    const button = document.createElement("button");
    button.innerText = "click";

    const isAuthorized = true;

    button.addEventListener("click", () => {
        if (isAuthorized) {
            return alert("Welcome!"); 
        }

        alert("Oops you are not authorized!");
    }); 

    document.body.append(button);
```

## Objects:

```javascript

// Objects can contain different type of variables as properties:

    const user = {
        // key-value pairs
        name: "Johan", // These are properties (AKA attributes)
        lastName: "Avendaño",
        address: {
            country: "Colombia",
            city: "Bogota"
        },
        friends: ["Ivan", "Stick"],
        active: true,
        sendMail: function(){ // These are methods
            return "Sending email...";
        },
        makeCall(){
            return "Making call...";
        }
    }
    console.log(user.sendMail()); // The . can be used to access a scpecific property of the object.
    console.log(user.friends);

// Shorthand Property Names:

const name = "laptop";
const price = 3000;
const newProduct = {
    name: name,
    price: price,
    //You can also call to a value of a variable if its name is the same:
    name,
    price,
}
console.log(newProduct);
```

## DOM:

### JS:
```javascript
// This is used to create HTML labels/elements:
document.createElement("h1");

// Variables can also be created with the same logic and be printed on console:
const title = document.createElement("h1");
console.log(title);

// They can also be added as an element in our HTML body and be displayed on our web site:
const title = document.createElement("h1");
title.innerText = "Hello World!"; // This add a text
const button = document.createElement("button"); // This is a HTML element
button.innerText = "click";

document.body.append(title); // Append() adds the element to the HTML code. It expects an HTML element.
document.body.append(button);

// Event Handlers: This trigger an action when certain event occurs:

    const title = document.createElement("h1");
    title.innerText = "Hello World!";
    const button = document.createElement("button");
    button.innerText = "click";

    button.addEventListener("click", function(){ // This is the Event Handler
        console.log("You clicked a button");
        title.innerText = "Bye World!";
        alert("You clicked a button");
    }); 

    document.body.append(title);
    document.body.append(button);

// Destructuring:

const user = {
    name: "Johan",
    age: 25
}

function printInfo(user){
    return "<h1>Hello " + user.name + "</h1>"; // This is a string.
}

// To destructure:
    function printInfo({name}){
        return "<h1>Hello " + name + "</h1>"; // This is a string.
    }

    // Or:

    function printInfo(user){
        const {name, age} = user;
        return "<h1>Hello " + name + "</h1>"; // This is a string.
    }

console.log(printInfo(user));
document.body.innerHTML = printInfo(user); // This add a HTML. It expects a HTML string.
```

## Ecmascript:

```html
<!-- The type attribute alllows us to use modules -->
<body>
<script type="module" src=".index.js"></script>
</body>
```

```javascript
// ./add.js
export function add(x=0, y=0){
    return x+y;
}

export function multiply(x, y){
    return x*y;
}

export PI = 3,1416;

// Default Module Variables:
export default add // or PI

// ./index.js
import {add, multiply, PI} from './add.js'
console.log(add(10, 20));
console.log(multiply(10, 20));
console.log(PI);

// Default Modules:
    import defaultModules from './add.js' // defaultModules can be any name you want.
    console.log(defaultModules());
```

## Optional Changing:

```javascript
const person = {
    name: 'Johan',
    address: {
        city: 'Bogota'
    }
}

// Here we will get an error: "Uncaught TypeError: Cannot read properties of undefined".
console.log(person.location.city);

// We can solve this issue with an if conditional:
if (person.location){
    console.log(person.location.city);
}

// We can also solve this issue with an Optional Changing:
console.log(person.location?.city); // The ? (-> if it exists) optionally looks for a value.
```

## **Async/Await:**

* **Methods:**

  * The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.

* **Asyncronous JS:** Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

  * Read more at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing. 

* **JS Promise:** A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

  * Read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#. 

* Sometimes we will be working with external data (e.g., JSON), that we will get from an HTML request. In these cases we can use:

* #### **fetch():**

```javascript
// Promises:
    let data = fetch('https://jsonplaceholder.typicode.com/posts');

    console.log(data); // This returns a PROMISE. When we execute a task, the browser can execute other tasks while our initial task is completed. So that, our code does not get stuck.
```
* #### **.then():** 
```javascript
// Promises:
    let data = fetch('https://jsonplaceholder.typicode.com/posts');
        .then(function(){ // When this task ends the task inside .then() will be executed.
            console.log('Finalizó la carga.')
        });

    console.log('Linea 2.');

    // Or:
    const ul = document.createElement("ul");

    let data = fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){ // This returns a response object
            return response.json(); // This becomes the response-object into a JSON file.
        }).then(function (data){
            console.log(data);
            data.forEach(function (post){
                const li = document.createElement("li");
                li.innerText = post.title;
                ul.append(li);
            });
            document.body.append(ul);
        });

    console.log('Linea 2.');

// Async/Await:
    const ul = document.createElement("ul");

    async function loadData(){ // In order for the await to work the code should be inside an async function.
            const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Await indicates it is Async JS
            const data = await response.json();
            data.forEach(function (post){
                const li = document.createElement("li");
                li.innerText = post.title;
                ul.append(li);
            });
            document.body.append(ul);
    };

    loadData();
    console.log('Linea 2.');
```

# **Node.js Course Notes**

## **Introduction**

### **What is Node.js?**

* It is a JS Runtime Environment. It allows to run/execute JS outside the browser.
* Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.

### **How to Install Node.js?**

* `NPM vs NPX`: NPM is a package manager used to install, delete, and update Javascript packages on your machine. NPX is a package executer, and it is used to execute javascript packages directly, without installing them.

1. Go to nodejs.org.

    > This package has installed:

    > * Node.js v20.2.0 to /usr/local/bin/node
    > * npm v9.6.6 to /usr/local/bin/npm

    > Make sure that /usr/local/bin is in your $PATH.
2. `node -v/--version`: This prints the Node.js version.

### **Node REPL in the CLI**

1. `node`: This opens the node REPL (Read-Eval-Print Loop)
   > A REPL is a computer environment where user inputs are read and evaluated, and then the results are returned to the user.Jul 30, 2021
2. `^L`: This cleans the CLI.
   > Abbreviated "Ctrl" or "Ctl." A modifier key that is pressed with a letter or digit key to command the computer. The caret symbol is a common symbol for Control; for example, ^Y means Ctrl-Y.
3. `setInterval()`: This runs a function setting a timer:
   ```javascript
   setInterval(()=> console.log("Hello"), 1000) // It expects as arguments a 1.) function and a 2.) time in ms – i.e., millisecond –.
   ```
4. `^C`: It ends a programm.
5. `process`: It access and displays different info about my OS.
   1. `process.version`: It prints the Node.js version property.
   2. `process.cwd()`: It prints the Current Working Directory.
6. `os.userInfo()`: This function prints info about my user.
7. `node -e ""`: It runs JS code.
   1. `node -e "console.log(10+10)"`
   2. `node -e "console.log(os.userInfo())"`
8. `.save`: Save all evaluated commands in a REPL session to a file.
   1. `.save names.js`
9.  `.load`: It loads the saved commands of a REPL.
    1. `.load names.js`

### **Node.js in VS Code**

* Node.js uses primarily the same JS syntaxis.

```javascript
// Sample #1:

const age = 17;

if (age >= 18) {
    console.log("You are an adult");
}else if (age >= 13) {
    console.log("You are a teenager");
}else{
    console.log("You are a child");
}

// Sample #2:

const names = ["Johan", "Mario"];

for (let i=0; i<names.length; i++) {
    console.log(names[i])
}

// Sample #3:
const showUserInfo = (name, age) => `Your name is ${name}, and you are ${age} old`;

console.log(showUserInfo("Johan", 25));
console.log(showUserInfo("Mario", 24));
```

### **Browser vs Node.js**

* Console
* CLI

### **Global Objects**

```javascript
console.log(__dirmane); // Output: /Users/johanavendano/HanSPy/nodejs_course/index.js:1

console.log(__filename); // Output: /Users/johanavendano/HanSPy/nodejs_course/index.js

console.log(module); // Returns an obj with different properties. It allows us to SPLIT a JS app in multiple files.

console.log(require); // Returns an obj with different properties. It allows us to IMPORT split files.

console.log(process); // It returns information about the system.
```
### **Timers**

* `setInterval()`: It executes a code each certain interval of time.

```javascript
setInterval(() => {
    console.log("Hello World!");
}, 2000)
```

* `setTimeout()`: It executes a code when certain interval of time times out.

```javascript
setTimeout(() => {
    console.log("Hello World!");
}, 5000)
```

### **CommonJS Modules**

* It is better to separate your code on different modules/files. For this, you can use:

* `module`: Returns an obj with different properties. It allows us to SPLIT a JS app in multiple files.

> This is under myModule.js file.

```javascript
const myWebAddress = "faztweb.com";
module.exports = myWebAddress;
```

> It can also export an obj with multiple properties.

```javascript
//Option #1:
const myWebAddress = "faztweb.com";
const friends = ["Ivan", "Stick"];
const user = {
    name: "Johan",
    age: 25
}

const group = {
    myWebAddress: myWebAddress,
    friends: friends,
    user: user
}

module.exports = group;

//Option #2:
const myWebAddress = "faztweb.com";
const friends = ["Ivan", "Stick"];
const user = {
    name: "Johan",
    age: 25
}

module.exports = {
    myWebAddress: myWebAddress,
    friends: friends,
    user: user
};

//Option #3:
const myWebAddress = "faztweb.com";
const friends = ["Ivan", "Stick"];
const user = {
    name: "Johan",
    age: 25
}

module.exports = {
    myWebAddress,
    friends,
    user
};
```

> It can also export properties individually.

```javascript
// Sample #1:

const myWebAddress = "faztweb.com";
const friends = ["Ivan", "Stick"];
const user = {
    name: "Johan",
    age: 25
}

module.exports.user = user;
module.exports.myWebAddress = myWebAddress;

// Sample #2:

function add (x, y) {
    return x + y;
}

function multiply (x, y) {
    return x * y;
}

module.exports = {
    add,
    multiply
}
```

* `require()`: Returns an obj with different properties. It allows us to IMPORT split files.

> This is under index.js file.

```javascript
// Sample #1:

const web = require("./myModule")

console.log(web);
```

> This can also retrieve specific properties.

```javascript
// Sample #1:

const {myWebAddress, friends, user} = require("./myModule")

console.log(myWebAddress);
console.log(friends);
console.log(user);

// Sample #2:

const math = require('../math/index');
console.log(math.add(10, 15));
```

### **Node.js Modules/ Node API**

* Node.js already has its own functions that can be used through different modules – this is AKA the node API –: https://nodejs.org/api/modules.html.

* **Module `'os'`: Stands for "Operating System".**

```javascript
const os = require('os')

console.log(os.userInfo())
console.log(os.uptime())
console.log(os.platform())
console.log(os.totalmem())
console.log(os.freemem())

console.table({ // console.table() prints the outputs on a table.
    os: os.platform(),
    version: os.version(),
    totalMemory: os.totalmem()
})
```

* **Module `'path'`:**

```javascript
const path = require('path')

const filePath = path.join('HanSPy', 'nodejs_course', 'module', 'index.js')

console.log(path.basename(filePath))
// Output: index.js

console.log(path.dirname(filePath))
// Output: HanSPy/nodejs_course/module

console.log(path.parse(filePath))
// {
//   root: '',
//   dir: 'HanSPy/nodejs_course/module',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }

console.log(path.resolve('index.js'))
// Output: /Users/johanavendano/HanSPy/nodejs_course/module/index.js
```

* **Module `'fs'` Sync: Stands for "FileSystem".**

```javascript
// Reading Files:

    // Sample #1:

    const fs = require('fs')
    const first = fs.readFileSync('../data/first.txt')
    console.log(first)
    // Output: <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>

    // Sample #2:

    const fs = require('fs')
    const first = fs.readFileSync('../data/first.txt', 'utf-8')
    console.log(first)
    // Output: Hello World!

    // Sample #3:
    
    const fs = require('fs')
    const first = fs.readFileSync('../data/first.txt')
    console.log(first.toString())
    // Output: Hello World!

//-----------------------

// Creating Files:

    // Sample #1:
    const fs = require('fs');
    fs.writeFileSync('../data/third.txt', "Este es un tercer archivo"); // It receives a root to create a file.

    // Sample #1: También se pueden pasar variables.
    const fs = require('fs');
    const title = "Este es un archivo nuevo";
    fs.writeFileSync('../data/third.txt', title); // Si yo vuelvo a ejecutar este código mi archivo se reescribirá por completo.

    // Sample #1: Si en vez de reescribir un archivo quiero agregar contenido puedo usar el siguiente objeto.
    const fs = require('fs');
    const title = "Este es un tercer archivo";
    fs.writeFileSync('../data/third.txt', title, {
        flag: 'a',
    });
```

* **Module `'fs'` Async: Stands for "FileSystem".**

* A `programming paradigm` is the classification, style or way of programming. It is an approach to solve problems by using programming languages. Depending on the language, the difficulty of using a paradigm differs.

![Programming Paradigms](./img/Programming%20Paradigms.png)

* `Asynchronous programming` is the multitasker, moving from one to-do to the other and alerting the system when each one is complete. Synchronous programming functions as a one-track mind, checking off one task at a time in a rigid sequence.

![Programming Paradigms](./img/Sync:Async%20Programming.png)

  * **Callback Hell**
    * Pending look up: What is Event Loop Node.js?

```javascript
const fs = require('fs');

// In this case this cannot be saved into a variable because the code will be run later on so the syntaxis must changed.

// Also, the function will receive two parameters to indicate if it fails or succeeds.

fs.readFile('../data/first.txt', 'utf-8', (err, data) => { // This arrow function is AKA a callback because it is executed after runnig the first function i.e., readFile().
    if (err) {
        console.log(err);
    }
    console.log(data); // Alternitively, I can use .toString() to become the buffer input into a str.

    fs.readFile('../data/second.txt', 'utf-8', (err, data) => { 
        if (err) {
            console.log(err);
        }
        console.log(data);
    });
});
```

* **Module `'http'`: Stands for "Hypertext Transfer Protocol".**
  
  * It allows us to create a web server.
  * Client-server Model.
    * Client-side Languages.
    * Server-side Languages.
  * [List of TCP and UDP port numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)

![Client-server Model](../jsCourse/img/Client-server%20Model.png)

```javascript
// http://localhost:3000

// Sample #1: Response.

const http = require('http');

http.createServer((req, res) => {
    res.write("Hello World");
    res.end(); // The res. end() method ends the current response process. This method is used to quickly end the response without any data. With res.end() you can only respond with text and it will not set "Content-Type".

}).listen(3000);

console.log("Server listening in PORT 3000");

    // Sample #1.1:

    const app = require('http').createServer((req, res) => res.send('Ahoy!')); // res.send() will check the structure of your output and set header information accordingly.
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    });

// Sample #2: Request.

const http = require('http');

http.createServer((req, res) => {

    console.log(req.url);

    if (req.url === '/') {
        res.write("Welcome to the main page!");
        return res.end();
    }

    if (req.url === '/about') {
        res.write("Welcome to about!");
        return res.end();
    }

    res.write("Oops page not found!");
    return res.end();
}).listen(3000);

// Sample #3: With HTML Code.

const http = require('http');

http.createServer((req, res) => {

    console.log(req.url);

    if (req.url === '/') {
        res.write("Welcome to the main page!");
        return res.end();
    }

    if (req.url === '/about') {
        res.write("Welcome to about!");
        return res.end();
    }

    res.write(`
    <h1>Oops page not found!</h1>
    <p>This page was not found!</h1>
    <a href="/">Back to main.</a>
    `);
    return res.end();
}).listen(3000);
```

### **Open-source Modules**

* **[NPM (Node.js Package Manager):](https://www.npmjs.com)**
  
  * `npm` allows us to manage third-party packages.
  * We can run any of the following cmd to install modules:

    * `npm install module_name`
    * `npm i module_name`
    * `npm i module_1 module_2 module_3`

  * The `node_modules` folder contains all the node.js modules I install.
  
  * The `package.json` file contains an object with the modules I install. This can be used for instance, in case I remove the `node_modules` folder or wants to install them in a different device by simply running the CLI cmd `npm install`. 

    This will install our dependencies i.e., those inside the `package.json`.

  * To remove a module we can run the CLI cmd `npm install module_name`.

* **`npm init`:**

  * After running this code the CLI will prompt you to answer certain questions to initiate a node.js project and will also create a `package.json` file where all our answers will be contained.
  * Under the `package.json` file, you will see a script object that can be used to create shortcodes.

  * **Hints:**

    * Version 1.0.0 -> SemVer (Semantic Versioning) e.g., "0.0.1".

  * `package.json` scripts:

```json
{
  "dependencies": {
    "dotenv": "^16.0.3",
    "twilio": "^4.11.1"
  },
  "scripts": {
    "start": "node src/nodejs/module/index.js", // This allows us to create shortcuts that can be used with the `npm run` cmd.
    "dev": "node src/nodejs/module/index.js"
  }
}
```

  * `npm i nodemon -D`: This cmd install modules under the DevDependencies.
    * The `nodemon` module helps to automatically display in our CLI the changes we make to our files: `nodemon index.js`.
  * `npm i nodemon -g`: This cmd install a module in the computer global modules.
  * `npm remove nodemon`: This cmd removes a module. If it is a global one add `-g` to the cmd.

* > Find more npm CLI cmd at https://docs.npmjs.com/cli/v9/commands.

* **[NPX (Node.js Package eXecute):](https://www.npmjs.com)**

* It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2.

* This is helpful if we want to use a module without installing it.

  * For instance we can use the module `serve` to create a server real quick: `npx serve nodejsCourse`.

### **Event Loop**

```javascript

```

### **Promise**

```javascript
const { error } = require('console');
const {readFile} = require('fs');

const getText = (pathFile) => { // This becomes a callback into a promise.
    return new Promise(function (resolve, reject) {
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data)
        })
    });
}

getText('../data/first.txt')
    .then(result => console.log(result))
    .then(() => getText('../data/second.txt'))
    .then(result => console.log(result))
    .catch(error => console.log(error))
```

### **Async / Await**

* They are promises, but with an easier syntaxis.

```javascript
const {readFile} = require('fs');

const getText = (pathFile) => {
    return new Promise(function (resolve, reject) {
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data)
        })
    });
}

async function read() {
    try {
        // throw new Error("This is an unexpected error")
        const result1 = await getText('../data/first.txt')
        const result2 = await getText('../data/second.txt')
        console.log(result1)
        console.log(result2)
    }catch(error){
        console.log(error)
    }
}

read();
```

### **Promesify**

* This allows us to become a callback into a promise with ease.

```javascript
const {readFile} = require('fs');
const {promisify} = require('util')

const readFilePromise = promisify(readFile);

async function read() {
    try {
        // throw new Error("This is an error")
        const result1 = await readFilePromise('../data/first.txt', 'utf-8')
        const result2 = await readFilePromise('../data/second.txt', 'utf-8')
        console.log(result1)
        console.log(result2)
    }catch(error){
        console.log(error)
    }
}

read();
```

### **fs Promise**

```javascript
const {readFile} = require('fs/promises');

async function read() {
    try {
        // throw new Error("This is an error")
        const result1 = await readFile('../data/first.txt', 'utf-8')
        const result2 = await readFile('../data/second.txt', 'utf-8')
        console.log(result1)
        console.log(result2)
    }catch(error){
        console.log(error)
    }
}

read();
```

### **fs Promise**

```javascript
const {readFile} = require('fs/promises');

async function read() {
    try {
        // throw new Error("This is an error")
        const result1 = await readFile('../data/first.txt', 'utf-8')
        const result2 = await readFile('../data/second.txt', 'utf-8')
        console.log(result1)
        console.log(result2)
    }catch(error){
        console.log(error)
    }
}

read();
```

### **Events**

* Event-driven Programming.

```javascript
const EvenEmitter = require('events');

const customEmitter = new EvenEmitter()

customEmitter.on('response', (data) => {
    console.log("received")
    console.log(data)
})

customEmitter.emit('response', "hello world")
customEmitter.emit('response', {name: "Johan"})
customEmitter.emit('response', [1, 2, 3])
```

### **Streams**

```javascript
// const {writeFile} = require('fs/promises')

// const createBigFile = async () => {
//     await writeFile('../data/bigFile.txt', 'Hello World'.repeat(100))
// }

// createBigFile();

const {createReadStream} = require('fs')

const stream = createReadStream('../data/bigFile.txt', {
    encoding: 'utf-8',
})

stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('Ya terminé')
})

stream.on('error', (error) => {
    console.log(error)
})
```

### **Streams and HTTP**

```javascript
```

### **CommonJS**

* Ecmascript Modules
* Adding `"type": "module"` inside our `package.json` will allow us to use import/export syntaxis.

```json
{
  "type": "module",
  "dependencies": {
    "dotenv": "^16.0.3",
    "twilio": "^4.11.1"
  },
  "scripts": {
    "start": "node /Users/johanavendano/dev/src/hansDev/nodejsCourse/module/index.js",
    "dev": "node /Users/johanavendano/dev/src/hansDev/nodejsCourse/module/index.js"
  }
}
```

```javascript
import math from '../math/index.js'
// const math = require('../data/index') // This is the same as above

console.log(math.add(10, 20))
```

### **fetch**

* #### **fetch():**

```javascript
// Promises:
    let data = fetch('https://jsonplaceholder.typicode.com/posts');

    console.log(data); // This returns a PROMISE. When we execute a task, the browser can execute other tasks while our initial task is completed. So that, our code does not get stuck.
```
* #### **.then():** 
```javascript
// Promises:
    let data = fetch('https://jsonplaceholder.typicode.com/posts');
        .then(function(){ // When this task ends the task inside .then() will be executed.
            console.log('Finalizó la carga.')
        });

    console.log('Linea 2.');

    // Or:
    const ul = document.createElement("ul");

    let data = fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){ // This returns a response object
            return response.json(); // This becomes the response-object into a JSON file.
        }).then(function (data){
            console.log(data);
            data.forEach(function (post){
                const li = document.createElement("li");
                li.innerText = post.title;
                ul.append(li);
            });
            document.body.append(ul);
        });

    console.log('Linea 2.');
```

* The following will also work without the Async Function if we already the `"type": "module"` inside our `package.json`. If not, use the Async Function as it follows:

![fetch async](../jsCourse/img/Fetch().png)

### **Express**

```javascript
```

### **Deploy**

```javascript
```
