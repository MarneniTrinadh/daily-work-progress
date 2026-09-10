getname();
// getName2();
// getName3();
console.log(x);
// console.log(y);
// console.log(z);
console.log(getname);
let y = 10;
var x = 7;
x = 8;
const z = 8;
var getName2 = function() { 
    console.log("My name is Trinadh");
};
var getName3 = () => {
    console.log("My name is Jeswanth");
}
function getname() {
    console.log("My name is Ganesh");
}
console.log(getName3);
console.log(getName2);
// getname();
// console.log(x);
console.log(y);
//Here we are creating a object with name and price properties. We can change the value of the properties but we cannot reassign the object to a new value.
var productName = {
    name: "Mobile",
    name : "Iphone",
    price: 10000,
}
// product.name = "Laptop";
var productName = {
    name : "My Phone",
    price : 100000,
}
console.log(productName);

const product = {
    name: "Mobile",
    name : "Iphone",
    price: 10000,
}

product.name = "apple";
// product.name = "Laptop";
console.log(product["price"]);
console.log(product);

let student ={
    name : "Trinadh",
    name : "Ganesh",
    age : 24,
}
student = {
    name : "Jasweath",
    age : 20,
}
console.log(student);

let parent = [{
    name : "Ganesh",
    age : 24,
}, {
    name : "Trinadh",
    age : 20,
}]
console.log(parent);

//let a  = 10;
//let b = 15;
// console.log("a++", a++);
// //console.log("++a", ++a);
// console.log(a);
// //console.log("--b", --b);
// console.log("b--", b--);
// console.log(b);
//let c = a<b;
//console.log(c);

// let a = 10;
// if(a === 10){
//     console.log("num");
// }

/*let mobile = "Nothing";
if (typeof mobile === "string") {
    console.log("My mobile name is Nothing");
}
*/

// let mobile = "Nothing";

// if (typeof mobile === "string") {
//     console.log("mobile is a string");
// }
/*let marks = prompt("Enter the marks");
if(marks <= 100 && marks >=90){
    console.log("a");
}else if(marks <=90 && marks >=80) {
    console.log("b");
}else{
    console.log("Fail");
}*/

// let person = "Trinadh";
// let mobile = "Nothing";
// if(typeof person === "string"){
//     if(mobile === "Nothing"){
//         console.log("Trinadh mobile is Nothing");
//     }
// }

// let day = 2;

// switch (day) {
//     case 1:
//         console.log("Monday");

//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
// }

//1.print num 1 to 10
// let a = 10;
// for (let i = 1; i <= a; i++){
//     console.log(i);
// }
//2.print 10 to 1;
// let b = 1;
// for (let i = 10; i >= b; i--){
//     console.log(i);
// }
//3.Print only even numbers from 1 to 20.
// for(i = 1; i <= 20; i++){
//     if(i % 2 == 0) {
//         console.log(i);
//     }
// }
// //4.Print only odd numbers from 1 to 20.
// for(i = 1; i <= 20; i++){
//     if(i % 2 != 0) {
//         console.log(i);
//     }
// }
// //7.Write a for loop to print:
// for(let i = 5; i <= 30; i +=5){
//     console.log(i);
// }

//8.Write a for loop to print the multiplication table of 5.
// for(let i = 1; i <=10; i++){
//     console.log(i*5);
// }
//9.Find the sum of numbers from 1 to 10.
// let sum = 0;
// for(let i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log(sum);
// //10.Find the sum of even numbers from 1 to 20.
// let sum1 = 0;
// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         sum1 += i;
//         // console.log(i);
//     }
// }
// console.log(sum1);

//11.Find the sum of even numbers from 1 to 20.
// let sum1 = 0;
// for(let i = 1; i <= 20; i++){
//     if(i % 2 !== 0){
//         sum1 += i;
//         // console.log(i);
//     }
// }
// console.log(sum1);

//12.
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// let userName = prompt("Enter your name");
// let str = `Hello  @${userName}${userName.length}`; 
// console.log(str.toLowerCase());

// let userName = "Trinadh"
// let str = `Hello  @${userName}${userName.length}`; 
// console.log(str.toLowerCase());
// let str = "javascript";
// let count = 0;
// // for(let i = 1; i <= str.length; i++){
// //     count++;
// // }
// // console.log(count);
// for(let i of str){
//     count++
// }
// console.log(count);

// //2.
// let str2 = "hello";
// for(let i of str2){
//     console.log(i);
// }
// //3.
// let str3 = "Hello World JavaScript";
// let count2 = 0;
// for(let i of str3) {
//     if(i === " "){
//         count2++
//     }
// }
// console.log(count2);
// let str = "javascript";
// let vowels = "aeiou";
// let count = 0;
// for(let i of str){
//     if(vowels.includes(i)){
//         count++;
//     }
// }
// console.log(count);

// let str1 = "hello";
// let reverse = "";
// for(let i = str1.length-1; i >= 0; i--){
//     reverse = reverse + str1[i];
// }
// console.log(reverse);
// if(str1 === reverse){
//     console.log("it is Palindrome");
// }else {
//     console.log("Not a Palindrome");
// }
//7
// let str = "javascript";
// let target = "a";
// let count = 0;
// for(let i of str){
//     if(target === i){
//         count++;
//     }
// }
// console.log(count);
// //8
// let str1 = "I am learning JavaScript";
// let result = str1.slice(14);
// console.log(result);
// //9.
// let str2 = "Marneni Trinadh Chowdary";
// //console.log(str2.replaceAll(" ", ""));
// let result1 = "";
// for(let i of str2){
//     if(i !== " "){
//         result1 = result1 + i; 
//     }
// }
// console.log(result1);

// let str3 = "abc123def45";
// let count1 = 0;
// for(let i of str3){
//     if(i >= "0" && i <= "9"){
//         count1++;
//     }
// }
// console.log(count1);

//1. Employee Age Check
//An HR system stores an employee's name and age.
let employee = [{name : "Ganesh", age : 20}, { name : "Jaswanth", age: 17}];
for(let person of employee) {
    if(person.age >= 18){
        console.log(person.name + " is eligible to work");
    }else{
        console.log(person.name + " is not eligible to work");
    }
}

// 2. Student Pass or Fail
// A college stores a student's marks.
// Requirement:
// 40 or above → Pass
// Below 40 → Fail
let student = "Rahul";
let marks = 65;
if(marks >= 40){
    console.log(student +" He is Pass");
}else {
    console.log(student + " not Pass");
}

// 3. Shopping Discount
// A shopping website gives a discount if the total purchase is ₹5,000 or more.
let shopping = 6500;
if(shopping >= 5000){
    console.log(shopping + " is get discount");
}else{
    console.log(shopping + " is not get discount");
}

// 4. ATM Withdrawal
// An ATM has a customer's balance.
// Requirement:
// Allow withdrawal only if the withdrawal amount is less than or equal to the balance.

let balance = 20000;
let withdrawal = 1000;
if(withdrawal <= balance){
    balance = balance - withdrawal;
    console.log("Withdrawal amount succcefully completed and balance amount " + balance);
}else {
    console.log("Account not having siffent amount");
}

// 5. Login System
// A website stores the correct username and password.
let correctUsername = "admin";
let correctPassword = "1234";

let username = "admin";
let password = "1234";

if (username === correctUsername && password === correctPassword) {
    console.log("Login successful");
} else {
    console.log("Invalid username or password");
}

// 6. Employee Salary Bonus
// A company gives a bonus based on salary.
// Rules:
// Salary ≥ ₹50,000 → 20% bonus
// Salary ≥ ₹30,000 → 10% bonus
// Otherwise → 5% bonus
let employee = "Trinadh";
let salary = 40000;
let bonus;

if (salary >= 50000) {
    bonus = salary * 0.20;
} else if (salary >= 30000) {
    bonus = salary * 0.10;
} else {
    bonus = salary * 0.05;
}

console.log(employee + " gets bonus:", bonus);

// 7. Product Search
// An online store has products.
let products = ["Laptop", "Phone", "Headphones", "Keyboard", "Mouse"];
let search = "Phone";

let found = false;

for (let i = 0; i < products.length; i++) {

    if (products[i] === search) {
        found = true;
        break;
    }
}

if (found) {
    console.log(search + " is available");
} else {
    console.log(search + " is not available");
}
// 8. Count Available Products

// A shop has product stock.

let stock = [10, 0, 5, 0, 20];

let available = 0;

for (let i = 0; i < stock.length; i++) {

    if (stock[i] > 0) {
        available++;
    }

}

console.log("Available products:", available);

// 9. Find Highest Employee Salary

// An HR system stores employee salaries.
let salaries = [40000, 60000, 50000, 70000, 55000];
let highestSalary = salaries[0];

for (let i = 1; i < salaries.length; i++) {
    if (salaries[i] > highestSalary) {
        highestSalary = salaries[i];
    }
}

console.log("Highest salary:", highestSalary);

// 10. Customer Name Validation

// A website wants to check whether a customer's name is empty.

let name2 = "Trinadh";

if (name2.length === 0) {
    console.log("Name is required");
} else {
    console.log("Name accepted");
}

// 11. Employee Attendance

// A company stores employee attendance:
let employees = ["Ravi", "Trinadh", "Kiran", "Suresh"];
let attendance = [true, false, true, true];

for (let i = 0; i < employees.length; i++) {

    if (attendance[i] === true) {
        console.log(employees[i] + " is Present");
    } else {
        console.log(employees[i] + " is Absent");
    }

}

// 12. Mobile Number Validation

// A website receives a mobile number as a string.

// Requirement:
// Check whether it contains exactly 10 characters.
let mobile = "9876543210";

if (mobile.length === 10) {
    console.log("Valid mobile number");
} else {
    console.log("Invalid mobile number");
}

// 13. Count Failed Students

// A college has student marks:
let marks = [85, 32, 45, 20, 75, 30];

let failedStudents = 0;

for (let i = 0; i < marks.length; i++) {

    if (marks[i] < 40) {
        failedStudents++;
    }

}

console.log("Failed students:", failedStudents);

// 14. E-Commerce Order Total

// A customer buys multiple products.
let prices = [500, 1200, 800, 300];

let total = 0;

for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

console.log("Total amount:", total);

// 15. Detect Spam Message

// A website wants to check whether a message contains the word "spam".
let message = "This is a spam message";
let word = "spam";

let found = false;

for (let i = 0; i <= message.length - word.length; i++) {

    if (message.substring(i, i + word.length) === word) {
        found = true;
        break;
    }

}

if (found) {
    console.log("Spam message detected");
} else {
    console.log("Message is safe");
}