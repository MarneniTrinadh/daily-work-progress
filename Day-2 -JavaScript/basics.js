//Variables and Data Types
function personInfo() {
    var name = "John";
    var name = "Doe"; // This will update the value of name to "Doe"
    var age = 30;
    age = 31; // This will update the value of age to 31
    var isStudent = true;
}
console.log(personInfo());
//var is a function-scoped variable, meaning it is accessible within the function it is declared in. In this case, the variables name, age, and isStudent are only accessible within the personInfo function.
function personDetails() {
    let name = "John";
    let age = 19;
    age = 20; // This will update the value of age to 20
    let isStudent = true;
    console.log(age)
}
console.log(personDetails());
//let is a block-scoped variable, meaning it is only accessible within the block it is declared in. In this case, the variables name, age, and isStudent are only accessible within the personDetails function.
function personData() {
    const name = "John";
    const age = 19;
    const isStudent = true;
}
console.log(personData());
//const is a block-scoped variable, meaning it is only accessible within the block it is declared in. In this case, the variables name, age, and isStudent are only accessible within the personData function. Additionally, const variables cannot be reassigned after they are declared.

//Operators
//Arithmetic Operators
let a = 10;
let b = 5;
let c = a + b; // Addition
let d = a - b; // Subtraction
let e = a * b; // Multiplication
let f = a / b; // Division
let g = a % b; // Modulus
let h = a ** b; // Exponentiation
console.log(c, d, e, f, g, h);

//unitary operators
let x = 5;
let y  = 6;
x = ++x; // Increment
y = --y; // Decrement
console.log(x, y);
// x = -x; // Negation
// console.log(x);
// y = -y; // Negation
// console.log(y);

//Comparison Operators
let num1 = 10;
let num2 = 5;
console.log(num1 > num2); // Greater than
console.log(num1 < num2); // Less than
console.log(num1 >= num2); // Greater than or equal to
console.log(num1 <= num2); // Less than or equal to
let str = "10";
console.log(num1 == str); // Equal to
console.log(num1 === str); // Strict equal to
console.log(num1 != num2); // Not equal to
console.log(num1 !== num2); // Strict not equal to

//Logical Operators
let cond1 = 10 > 5;
let cond2 = 6 > 10;
let cond3 = true;
console.log(cond1 && cond2); // Logical AND
console.log(cond1 || cond2); // Logical OR
console.log(!cond1); // Logical NOT

//Conditional Statements
//if statement
let number = prompt("Enter a number:");
if  (number > 0) {
    console.log("The number is positive.");
}

//if-else statement
let age = prompt("Enter your age:");
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

//else-if statement
let marks = prompt("Enter your marks:");
if (marks <= 100 && marks >= 90) {
    console.log("You got an S grade.");
} else if (marks >= 80 && marks <= 79) {
    console.log("You got an A grade.");
}else if (marks >= 70 && marks <= 69) {
    console.log("You got a B grade."); 
}else if (marks >= 60 && marks <= 59) {
    console.log("You got a C grade.");
}else if (marks >= 50 && marks <= 49) {
    console.log("You got a D grade.");
} else if (marks >= 0 && marks <= 39) {
    console.log("You got a Fail grade.");
}


//practice problem
let number1 = prompt("Enter a number:");
if (number1 % 5 === 0) {
    alert("The number is divisible by 5.");
    console.log(number1 + " is divisible by 5.")
} else {
    alert("The number is not divisible by 5.");
    console.log(number1 + " is not divisible by 5.")
}

//String Methods
let str1 = "Hello, World!";
console.log(str1.length); // Length of the string
console.log(str1.toUpperCase()); // Convert to uppercase
console.log(str1.toLowerCase()); // Convert to lowercase
console.log(str1.indexOf("World")); // Find the index of a substring
console.log(str1.slice(0, 5)); // Extract a substring
console.log(str1.replace("World", "JavaScript")); // Replace a substring
console.log(str1.split(", ")); // Split the string into an array
console.log(str1.trim()); // Remove whitespace from both ends of the string
console.log(str1.charAt(0)); // Get the character at a specific index
console.log(str1.includes("Hello")); // Check if the string contains a substring
console.log(str1.startsWith("Hello")); // Check if the string starts with a substring
console.log(str1.endsWith("!")); // Check if the string ends with a substring
console.log(str1.repeat(2)); // Repeat the string a specified number of times

//Loop Methods
//for loop
let i = 0;
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//do-while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

//practce problem
for (let num = 1; num <= 10; num++) {
    console.log(num);
}

//practice problem 2 Count the number of occurrences of a specific character in a string
let word2 = "banana";
let count = 0;

for (let i = 0; i < word2.length; i++) {
    if (word2[i] === "a") {
        count++;
    }
}

console.log(count);

//practice problem 3 Reverse a string
let word = "hello";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word[i];
}

console.log(reversed);

//practice problem 4 palindrome check
let word1 = "racecar";
let reversed1 = "";
for (let i = word1.length - 1; i >= 0; i--) {
    reversed1 = reversed1 + word1[i];
}
if (word1 === reversed1) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}

console.log(reversed1);