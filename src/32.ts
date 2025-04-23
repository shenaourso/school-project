// Define a function to calculate the sum of two numbers
function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

// Test the addNumbers function with sample data
const result = addNumbers(5, 3);
console.log(result); // Output: 8

// Define a function to check if two arrays have at least one common element
function haveCommonElement(arr1: number[], arr2: number[]): boolean {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// Test the haveCommonElement function with sample data
const result = haveCommonElement([1, 2, 3], [4, 5, 6]);
console.log(result); // Output: false

// Define a function to convert temperature from Celsius to Fahrenheit
function convertTemperature(celsius: number): number {
  return (celsius * 9 / 5) + 32;
}

// Test the convertTemperature function with sample data
const result = convertTemperature(0);
console.log(result); // Output: 32

// Define a class for a car with attributes and methods related to it
class Car {
  speed: number;
  color: string;

  constructor(speed: number, color: string) {
    this.speed = speed;
    this.color = color;
  }

  accelerate(): void {
    console.log(`The ${this.color} car is accelerating...`);
  }
}

// Test the Car class with sample data
const myCar = new Car(80, "red");
myCar.accelerate();
console.log("Speed: ", myCar.speed); // Output: Speed:  80

// Define a function to calculate the area of a rectangle
function calculateArea(length: number, width: number): number {
  return length * width;
}

// Test the calculateArea function with sample data
const result = calculateArea(10, 5);
console.log(result); // Output: 50

// Define a function to sort an array of numbers in ascending order
function sortNumbers(numbers: number[]): number[] {
  return numbers.sort((a, b) => a - b);
}

// Test the sortNumbers function with sample data
const result = sortNumbers([8, 2, 7, 1, 4]);
console.log(result); // Output: [1, 2, 4, 7, 8]
