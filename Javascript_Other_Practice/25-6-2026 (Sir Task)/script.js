// Que 1 Print Hello World
console.log("Hello World");

// Que 2 Add Two Numbers
// let a = 10;
// let b = 20;
// let sum = a + b;

// console.log("a =", a, "b =", b);
// console.log("sum =", sum);


// Que 3 Find the Square Root
let sr = 25;
console.log("25 square Root is :- ", sr ** (1 / 2));

// Que 4 Calculate the Area of a Triangle
let t = 2;
let r = 6;
let l = 10;
let s = (t + r + l) / 2;

console.log("Area of Triangle is :- ", s ** (1 / 2));

// Que 5 Swap Two Variables
// let a = 10;
// let b = 20;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("Swap a variables :- ", a);
// console.log("Swap b variables :- ", b);

// Que 6 Solve Quadratic Equation
let a = 1;
let b = -3;
let c = 2;

let d = (b * b) - (4 * a * c);

let root1 = (-b + Math.sqrt(d)) / (2 * a);
let root2 = (-b - Math.sqrt(d)) / (2 * a);

console.log("Root 1 =", root1);
console.log("Root 2 =", root2);

//Que 7 Generate a Random Number


// Que 8 Check if a Number is Positive, Negative, or Zero
// let num = 5;

// if (num > 0) {
//     console.log("Positive");
// } else if (num < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }

// Que 9 Check if a Number is Odd or Even
let num = 9;

if (num % 2 == 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// Que 10 Find the Largest Among Three Numbers
let a1 = 190;
let b2 = 20;
let c3 = 300;

if (a1 > b2 && a > c3) {
    console.log("Largest numbers is =", a1);
}
else if (b2 > a1 && b > c3) {
    console.log("Largest numbers is =", b2);
}
else {
    console.log("Largest numbers is =", c3);
}

// Que 11 Check Prime Number
let prnum = 17;
let prime = true;

for (let i = 2; i < prnum; i++) {
    if (prnum % i == 0) {
        prime = false;
        break;
    }
}

if (prime) {
    console.log("Prime Number");
} else {
    console.log("Not Prime Number");
}

// Que 12 Print All Prime Numbers in an Interval
let start = 1;
let end = 10;

for (let i = start; i <= end; i++) {

    let prime = true;

    if (i == 1) {
        prime = false;
    }

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log(i);
    }
}

// Que 13 Find the Factorial of a Number
let fnum = 5;
let fact = 1;

for (let i = 1; i <= fnum; i++) {
    fact = fact * i;
}

console.log("Factorial =", fact);

// Que 14 Display the Multiplication Table
let mtnum = 5;

for (let i = 1; i <= 10; i++) {
    console.log(mtnum + " x " + i + " = " + (mtnum * i));
}

// Que 15 Convert Kilometers to Miles
let km = 10;

let miles = km * 0.621371;

console.log("Miles =", miles);

// Que 16 Convert Celsius to Fahrenheit
let celsius = 30;

let fahrenheit = (celsius * 9 / 5) + 32;

console.log("Fahrenheit =", fahrenheit);
