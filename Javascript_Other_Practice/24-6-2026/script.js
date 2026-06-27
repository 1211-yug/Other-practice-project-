// This is a Single line comment

/* This is a multi-line
comment */

// Operators

// let a = 10;
// let b = 2;

// console.log("a = ", a, "b = ", b);

// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);

// Unary Operators
// let a = 10;
// let b = 2;

// console.log("a = ", a, "b = ", b);
// a--;
// console.log("a-- =", a);

// Assignment Operators
// let a = 10;
// let b = 12;

// console.log("a = ", a, "b = ", b);

// a += 4;
// console.log("a += 4 =", a);

// b -= 4;
// console.log("b -= 4 =", b);

// a *= 5;
// console.log("a *= 5 =", a);

// b %= 2;
// console.log("b %= 2 =", b);

// a /= 2;
// console.log("a /= 2 =", a);

// b **= 4;
// console.log("b **= 4 =", b);

// Comparison Operators
// let a = 10;
// let b = 1;

// console.log("10 == 10", a == b);

// console.log("10 != 30", a != b);

// console.log("10 === 10", a === b);

// console.log("10 !== 10", a !== b);

// console.log("a > b", a > b);

// Logical Operators
// let a = 6;
// let b = 5;

// let cond1 = a > b;
// let cond2 = a == 6;

// console.log("a && b", cond1 && cond2);


// Conditional (Ternary) Operator

// let age = 12;

// if (age >= 18) {
//     console.log("Adult");
// }

// if (age < 18) {
//     console.log("Minor");
// }

// if else statement

// let num = 15;

// if (num % 2 === 0) {
//     console.log("Number is Even");
// }
// else {
//     console.log("Number is Odd");
// }

// else if statement

// let mode = "";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else if (mode === "blue") {
//     color = "blue";
// } else if (mode === "pink") {
//     color = "pink";
// } else {
//     color = "white";
// }

// console.log(color);

// Ternary operators

// let age = 19;

// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);


/* Example */

console.log("====== Example =======");

// Que 1 

// let num = prompt("Enter a number :-");

// if (num % 5 === 0) {
//     console.log(num, "is a multiple of 5");
// } else {
//     console.log(num, "is not a multiple of 5");
// }

// Que 2

let score = prompt("Enter your score (0-100):- ");
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score <= 89) {
    grade = "B";
} else if (score >= 70 && score <= 79) {
    grade = "C";
} else if (score >= 60 && score <= 69) {
    grade = "D";
} else if (score >= 40 && score <= 59) {
    grade = "E";
} else {
    grade = "Fail";
}

console.log("Grade is =", grade);

