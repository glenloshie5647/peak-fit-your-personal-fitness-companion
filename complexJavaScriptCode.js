/* 
Filename: complexJavaScriptCode.js
Content: Complex JavaScript Code Example 
*/

// Define a class for Shape
class Shape {
  constructor(name) {
    this.name = name;
  }

  // Method to get the area of the shape
  getArea() {
    throw new Error('Method not implemented.');
  }
}

// Define a class for Rectangle, a subclass of Shape
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  // Override the getArea method
  getArea() {
    return this.width * this.height;
  }
}

// Define a class for Circle, a subclass of Shape
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  // Override the getArea method
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Create instances of Shape subclasses
const rectangle = new Rectangle('Rectangle', 5, 10);
const circle = new Circle('Circle', 7);

// Call getArea method for each shape
console.log(rectangle.name + ' area: ' + rectangle.getArea());
console.log(circle.name + ' area: ' + circle.getArea());

// Define a function that returns a Promise after a delay
function delayedPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolved after ' + delay + ' milliseconds');
    }, delay);
  });
}

// Call the function and handle the promise resolution
delayedPromise(2000)
  .then((result) => {
    console.log(result);
    return delayedPromise(3000);
  })
  .then((result) => {
    console.log(result);
    return delayedPromise(1000);
  })
  .catch((error) => {
    console.error('Promise rejected:', error);
  });

// Define a generator function that yields Fibonacci sequence
function* fibonacciGenerator() {
  let prev = 0;
  let curr = 1;
  while (true) {
    yield curr;
    let temp = prev + curr;
    prev = curr;
    curr = temp;
  }
}

// Create an instance of Fibonacci sequence generator
const fibonacci = fibonacciGenerator();

// Print the first 10 Fibonacci numbers
let fibonacciNumbers = [];
for (let i = 0; i < 10; i++) {
  fibonacciNumbers.push(fibonacci.next().value);
}
console.log('Fibonacci sequence:', fibonacciNumbers);

// Define an async function to make an API request
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the fetchData function
fetchData('https://api.example.com/data');

// Define a closure function that counts the number of function invocations
function counter() {
  let count = 0;
  return function() {
    return ++count;
  }
}

// Create an instance of the counter function
const countInvocations = counter();

// Call the counter function multiple times
console.log('Invocation count:', countInvocations());
console.log('Invocation count:', countInvocations());
console.log('Invocation count:', countInvocations());

// ... Add more complex and creative code here ...