//Arrays today i procticed
//1. Shopping Cart Total — You have an array of product prices `\[299, 499, 999, 150]`. Calculate the total bill.
let prices = [299, 499, 999, 150];
let total = 0;

for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}

console.log("Total:", total);

//2.Attendance Tracker — An array holds daily attendance (`true`/`false`) for 30 days. Count total present days.

let attendance = [
    true, true, false, true, false,
    true, true, true, false, true
];

let present = 0;

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === true) {
        present++;
    }
}

console.log("Present Days:", present);

//3.Highest Scorer — Given an array of student marks, find the highest and lowest marks.
let marks = [85, 72, 95, 68, 91];

let highest = marks[0];
let lowest = marks[0];

for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
        highest = marks[i];
    }

    if (marks[i] < lowest) {
        lowest = marks[i];
    }
}

console.log("Highest:", highest);
console.log("Lowest:", lowest);

//4.Remove Duplicate Contacts — A phone contact list array has duplicate numbers. Return a list with unique numbers only.
let contacts = [
    "9876543210",
    "9123456789",
    "9876543210",
    "9988776655",
    "9123456789"
];

let uniqueContacts = [];

for (let i = 0; i < contacts.length; i++) {
    if (!uniqueContacts.includes(contacts[i])) {
        uniqueContacts.push(contacts[i]);
    }
}

console.log(uniqueContacts);

//5.Cart Item Count by Category — Given an array of cart items with a `category` field, count how many items belong to each category.

let cart = [
    { name: "Laptop", category: "Electronics" },
    { name: "Mouse", category: "Electronics" },
    { name: "Chair", category: "Furniture" },
    { name: "Table", category: "Furniture" },
    { name: "Phone", category: "Electronics" }
];

let categoryCount = {};

for (let i = 0; i < cart.length; i++) {
    let category = cart[i].category;

    if (categoryCount[category]) {
        categoryCount[category]++;
    } else {
        categoryCount[category] = 1;
    }
}

console.log(categoryCount);

//6.Merge Two Playlists — Combine two arrays of song names into one array without duplicates.

let playlist1 = ["Song A", "Song B", "Song C"];
let playlist2 = ["Song B", "Song D", "Song A"];

let playlist = [];

for (let i = 0; i < playlist1.length; i++) {
    if (!playlist.includes(playlist1[i])) {
        playlist.push(playlist1[i]);
    }
}

for (let i = 0; i < playlist2.length; i++) {
    if (!playlist.includes(playlist2[i])) {
        playlist.push(playlist2[i]);
    }
}

console.log(playlist);

//7. Group Expenses by Type — Given an array of expense objects (`{type, amount}`), group and sum amounts by `type`.
let expenses = [
    { type: "Food", amount: 500 },
    { type: "Travel", amount: 1000 },
    { type: "Food", amount: 300 },
    { type: "Shopping", amount: 1500 },
    { type: "Travel", amount: 500 }
];

let totalExpenses = {};

for (let i = 0; i < expenses.length; i++) {
    let type = expenses[i].type;

    if (totalExpenses[type]) {
        totalExpenses[type] += expenses[i].amount;
    } else {
        totalExpenses[type] = expenses[i].amount;
    }
}

console.log(totalExpenses);

//Topics are covering practiced Arrays, Functions, Loops, Conditionals, Objects, and String Manipulation.

//8.E-commerce Bill Generator
//    You have an array of cart items: `[{name, price, qty}]`. Write a function that loops through the array, calculates the total for each item (`price * qty`), prints an itemized string bill, and returns the grand total.

const carts = [
    { name: "Laptop", price: 50000, qty: 1 },
    { name: "Mouse", price: 1000, qty: 2 },
    { name: "Keyboard", price: 2000, qty: 1 }
];

function generateBill(carts) {
    let grandTotal = 0;

    for (let i = 0; i < carts.length; i++) {
        let itemTotal = carts[i].price * carts[i].qty;

        console.log(
            carts[i].name + " - ₹" + itemTotal
        );

        grandTotal += itemTotal;
    }

    console.log("Grand Total: ₹" + grandTotal);

    return grandTotal;
}

generateBill(carts);

//9. Attendance Percentage Calculator
//Given an array of boolean values representing daily attendance, write a function that counts presents using a loop, calculates the percentage (using division/multiplication operators), and returns "Eligible" or "Not Eligible" based on a 75% cutoff.


const attendances = [
    true, true, true, false, true,
    true, false, true, true, true
];

function calculateAttendance(attendances) {

    let presentDays = 0;

    for (let i = 0; i < attendances.length; i++) {

        if (attendances[i] === true) {
            presentDays++;
        }
    }

    let percentage =
        (presentDays / attendances.length) * 100;

    let status;

    if (percentage >= 75) {
        status = "Eligible";
    } else {
        status = "Not Eligible";
    }

    return {
        presentDays: presentDays,
        percentage: percentage,
        status: status
    };
}

console.log(calculateAttendance(attendances));

//10. Contact List De-duplicator & Formatter
//   Given an array of phone numbers as strings (some with spaces/dashes like `"98765 43210"`), write a function that cleans each string (remove spaces/dashes), removes duplicates, and returns a formatted array like `"+91-98765-43210"`.

const contact = [
    "98765 43210",
    "98765-43210",
    "91234 56789",
    "99887-76655",
    "9123456789"
];

function formatContacts(contact) {

    let uniqueNumbers = [];

    for (let i = 0; i < contact.length; i++) {

        let number = contact[i];

        number = number.replaceAll(" ", "");
        number = number.replaceAll("-", "");

        if (!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number);
        }
    }

    let formattedNumbers = [];

    for (let i = 0; i < uniqueNumbers.length; i++) {

        let number = uniqueNumbers[i];

        let formatted =
            "+91-" +
            number.slice(0, 5) +
            "-" +
            number.slice(5);

        formattedNumbers.push(formatted);
    }

    return formattedNumbers;
}

console.log(formatContacts(contact));

