//functions
//1.Write a function greet() that prints:
function greet() {
    console.log("Hello, Welcome to JavaScript!");
}

greet();

//2. Write a function that takes two numbers as parameters and returns their sum.
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10));

//3. Write a function that takes a string as a parameter and returns the length of the string.
function stringLength(str) {
    return str.length;
}
console.log(stringLength("Hello, World!"));

//4.Write a function to check whether a number is even or odd.
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(10));

//5. Write a function that takes an array of numbers as a parameter and returns the largest number in the array.
function findLargestNumber(arr) {
    return Math.max(...arr);
}
console.log(findLargestNumber([1, 5, 10, 3, 7]));

//6.Write a function to find the largest of two numbers.
function findLargest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(findLargest(10, 20));

//7.Write a function square(num) that returns the square of a number.
function square(num) {
    return num * num;
}

console.log(square(5));

//8.Create a function greet(name = "Guest") that prints a greeting.
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
greet("Trinadh");

//9.Create a function that calculates the final price after applying a discount percentage.
function calculatePrice(price, discount) {
    let discountAmount = price * discount / 100;
    return price - discountAmount;
}

console.log(calculatePrice(1000, 10));

//10.create a function to calculate the area of a rectangle using length and width.
function rectangleArea(length, width) {
    return length * width;
}

console.log(rectangleArea(10, 5));

//11. Create a function that accepts a name and a callback function, then calls the callback.
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Trinadh", sayBye);

//12. Create a function calculate(a, b, operation) where operation is a callback for addition or multiplication.
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));

//13. Employee Salary Calculator
// Create a function that takes salary and bonusPercentage and returns the final salary.
function calculateSalary(salary, bonusPercentage) {
    let bonus = salary * bonusPercentage / 100;
    return salary + bonus;
}

console.log(calculateSalary(50000, 10));

//14. Student Result Checker
// Create a function that takes marks and returns "Pass" or "Fail".
function checkResult(marks) {
    if (marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(checkResult(75));

//15. Shopping Discount Calculator
// Create a function that takes amount and applies:

// Above 5000 → 20% discount
// Above 2000 → 10% discount
// Otherwise → No discount

function calculateFinalAmount(amount) {
    let discount = 0;

    if (amount > 5000) {
        discount = amount * 20 / 100;
    } else if (amount > 2000) {
        discount = amount * 10 / 100;
    }

    return amount - discount;
}

console.log(calculateFinalAmount(6000));

//16. Email/Form Validator

// Practice:

// Functions
// Strings
// Conditions
// return
let formData = prompt("Enter your name, email, and password separated by commas (e.g., John Doe, john@example.com, password123)");
function validateForm({ name, email, password }) {
    let errors = {};

    if (name.length < 2) {
        errors.name = "Name must contain at least 2 characters";
    }

    if (!email.includes("@") || !email.includes(".")) {
        errors.email = "Invalid email address";
    }

    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= "0" && password[i] <= "9") {
            hasNumber = true;
        }
    }

    if (password.length < 6) {
        errors.password = "Password must contain at least 6 characters";
    } else if (!hasNumber) {
        errors.password = "Password must contain at least one number";
    }

    return errors;
}

console.log(validateForm({
    name: "Trinadh",
    email: "trinadh@gmail.com",
    password: "hello123"
}));

//17. Password Strength Checker
let password = prompt("Enter your password:");
function checkPasswordStrength(password) {
    let hasUppercase = false;
    let hasNumber = false;
    let hasSpecialCharacter = false;

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (char >= "A" && char <= "Z") {
            hasUppercase = true;
        } else if (char >= "0" && char <= "9") {
            hasNumber = true;
        } else if (
            char === "!" ||
            char === "@" ||
            char === "#" ||
            char === "$"
        ) {
            hasSpecialCharacter = true;
        }
    }

    if (
        password.length >= 8 &&
        hasUppercase &&
        hasNumber &&
        hasSpecialCharacter
    ) {
        return "Strong";
    } else if (password.length >= 6) {
        return "Medium";
    } else {
        return "Weak";
    }
}

console.log(checkPasswordStrength("Hello123@"));

