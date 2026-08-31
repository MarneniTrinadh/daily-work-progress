//Practice Problems
//Variables
// 1. Swap the values of two variables without using a third variable.
// 2. Take a person's name, age, and city and print a sentence like: "John is 22 years old and lives in Delhi."
// 3. Convert a temperature from Celsius to Fahrenheit (formula: F = C * 9/5 + 32).
//Answers:
// 1. Swap the values of two variables without using a third variable.
let a = 5;
let b = 10;
a = a + b; // a becomes 15
b = a - b; // b becomes 5
a = a - b; // a becomes 10
console.log("After swapping: a = " + a + ", b = " + b);
console.log("After swapping: a = " + a + ", b = " + b);

//2. Take a person's name, age, and city and print a sentence like: "John is 22 years old and lives in Delhi."
let name = "John";
let age = 22;
let city = "Delhi";
console.log(name + " is " + age + " years old and lives in " + city + ".");

//3. Convert a temperature from Celsius to Fahrenheit (formula: F = C * 9/5 + 32)
let celsius = 25;
let fahrenheit = celsius * 9/5 + 32;
console.log(celsius + "°C is equal to " + fahrenheit + "°F.");

//Operators
// 4. Check if a given number is even or odd using the modulus operator.
let number = 7;
if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}

// 5. Calculate the area and perimeter of a rectangle given length and width.
let length = 10;
let width = 5;
let area = length * width;
let perimeter = 2 * (length + width);
console.log("Area: " + area);
console.log("Perimeter: " + perimeter);

// 6. Given three numbers, find the largest one using comparison operators (no Math.max yet).
let x = 15;
let y = 25;
let z = 20;
if (x >= y && x >= z) {
    console.log("The largest number is: " + x);
} else if (y >= x && y >= z) {
    console.log("The largest number is: " + y);
} else {
    console.log("The largest number is: " + z);
}

// 7. Swap two numbers using the + and - operators only (no third variable, no destructuring).
let p = 10;
let q = 20;
p = p + q; // p becomes 30
q = p - q; // q becomes 10
p = p - q; // p becomes 20
console.log("After swapping: p = " + p + ", q = " + q);

//Conditional Statements
// 8. Write a program that checks if a number is positive, negative, or zero.
let num = 5;
if (num > 0) {
    console.log(num + " is positive.");
} else if (num < 0) {
    console.log(num + " is negative.");
} else {
    console.log(num + " is zero.");
}

// 9. Build a simple grading system: given a score (0–100), print the grade (A/B/C/D/F) using if-else.
let score = 85;
if (score >= 80) {
    console.log("Grade: A");
} else if (score >= 60) {
    console.log("Grade: B");
} else if (score >= 40) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// 10. Check if a given year is a leap year.
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// 11. Write a program that takes three sides of a triangle and checks if they form a valid triangle, and if so, whether it's equilateral, isosceles, or scalene.
let side1 = 5;
let side2 = 5;
let side3 = 5;
if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    if (side1 === side2 && side2 === side3) {
        console.log("The triangle is equilateral.");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        console.log("The triangle is isosceles.");
    } else {
        console.log("The triangle is scalene.");
    }
} else {
    console.log("The sides do not form a valid triangle.");
}

// 12. Simulate a basic login check: if username is "admin" and password is "1234", print "Access granted", else "Access denied".
let username = "admin";
let password = "1234";
if (username === "admin" && password === "1234") {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

//String 

//13.Reverse a string without using .reverse() (hint: loop through it backwards).
let str = "Hello, World!";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log("Reversed String: " + reversedStr);

//14.Count how many vowels are in a given string.
let inputString = "This is a sample string.";
let vowelCount = 0;
for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i].toLowerCase();
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        vowelCount++;
    }
}
console.log("Number of vowels: " + vowelCount);

//15.Check if a given string is a palindrome (reads the same forwards and backwards) — e.g., "madam".
let str1 = "madam";
let reversed = "";

for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];
}

if (str1 === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}

//16.Count the number of words in a sentence (without using .split().length — try counting spaces manually first, then try the built-in way).
let sentence1 = "I am learning JavaScript";
let count = 1;

for (let i = 0; i < sentence1.length; i++) {
    if (sentence1[i] === " ") {
        count++;
    }
}

console.log(count);

//18.Find the longest word in a sentence.
let sentence2 = "I am learning JavaScript programming";
let words = sentence2.split(" ");
let longest = "";

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i];
    }
}

console.log(longest);

//19. Format a user's name (capitalize the first letter and make the rest lowercase)
let nameletter = prompt("Enter your name: ");
let firstLetter = nameletter.charAt(0).toUpperCase();
let restOfName = nameletter.slice(1).toLowerCase();
let formattedName = firstLetter + restOfName;
console.log("Formatted Name: " + formattedName);

//Loops 
// 20. Print all even numbers from 1 to 50.
let i = 1;
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

//21. Print the multiplication table of a given number (1 to 10).
let number1 = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number1} x ${i} = ${number1 * i}`);
}

//22. Find the sum of all numbers from 1 to N.
let N = 10;
let sum = 0;
for (let i = 1; i <= N; i++) {
    sum += i;
}
console.log("Sum:", sum);

//23. Find the factorial of a given number.
let num1 = 5;
let factorial = 1;
for (let i = 1; i <= num1; i++) {
    factorial *= i;
}
console.log("Factorial:", factorial);

//24. Print the Fibonacci series up to N terms.
let n = 10;
let s = 0, t = 1;
console.log(s, t);
for (let i = 2; i < n; i++) {
    let r = s + t;
    console.log(r);
    s = t;
    t = r;
}

//25. Count how many times a specific character appears in a string, using a loop.
let str3 = "Hello, World!";
let charToCount = "l";
let count1 = 0;
for (let i = 0; i < str3.length; i++) {
    if (str3[i] === charToCount) {
        count1++;
    }
}
console.log(`The character '${charToCount}' appears ${count1} times.`);

//26. Print a simple pattern using nested loops.
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

//Combined Problems
//27. FizzBuzz: print numbers 1 to 100, but for multiples of 3 print "Fizz", multiples of 5 print "Buzz", multiples of both print "FizzBuzz".
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//28. Write a program that takes a sentence and counts how many uppercase letters, lowercase letters, and digits it contains.
let str4 = "Hello123World";

let uppercase = 0;
let lowercase = 0;
let digits = 0;

for (let i = 0; i < str4.length; i++) {
    let char = str4[i];

    if (char >= "A" && char <= "Z") {
        uppercase++;
    } else if (char >= "a" && char <= "z") {
        lowercase++;
    } else if (char >= "0" && char <= "9") {
        digits++;
    }
}

console.log("Uppercase:", uppercase);
console.log("Lowercase:", lowercase);
console.log("Digits:", digits);

//29. Build a simple number guessing checker: given a secretNumber and a guess variable, print "Too high", "Too low", or "Correct" using conditionals.
let secretNumber = 25;
let guess = 20;

if (guess > secretNumber) {
    console.log("Too high");
} else if (guess < secretNumber) {
    console.log("Too low");
} else {
    console.log("Correct");
}

//30. ATM Withdrawal
//A user has ₹10,000 in their account. They want to withdraw ₹3,000. Check whether the balance is sufficient.
let balance = 10000;
let withdraw = 3000;

if (withdraw <= balance) {
    balance = balance - withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("Insufficient Balance");
}

//31.Login System

// Check whether:

// Username = "admin"
// Password = "1234"

// Print Login Successful or Invalid Credentials.
let username1 = "admin";
let password1 = "1234";

if (username1 === "admin" && password1 === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}

//32. Shopping Discount

// If the purchase amount is:

// Above ₹5000 → 20% discount
// Above ₹2000 → 10% discount
// Otherwise → No discount

// Calculate the final amount.
let amount1 = 6000;
let discount1 = 0;

if (amount1 > 5000) {
    discount1 = amount1 * 20 / 100;
} else if (amount1 > 2000) {
    discount1 = amount1 * 10 / 100;
}

let finalAmount1 = amount1 - discount1;

console.log("Discount:", discount1);
console.log("Final Amount:", finalAmount1);

//33. Product Price Calculator

// Given a product price and quantity, calculate:

// Total price
// Discount
// Final price
let price = 1000;
let quantity = 3;

let totalPrice = price * quantity;
let discount = 0;

if (totalPrice >= 2000) {
    discount = totalPrice * 10 / 100;
}

let finalPrice = totalPrice - discount;

console.log("Total Price:", totalPrice);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);