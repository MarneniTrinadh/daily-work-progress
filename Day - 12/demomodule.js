// function addNumbers(a, b) {
//     return a + b;
// }

// function subtractNumbers(a, b) {
//     return a - b;
// }
// function multiplyNumbers(a, b) {
//     return a * b;
// }
// function divideNumbers(a, b) {
//     if (b === 0) {
//         throw new Error("Cannot divide by zero");
//     }
//     return a / b;
// }

// module.exports = {addNumbers, subtractNumbers, multiplyNumbers, divideNumbers};

//Express.js
const express = require('express');
const app = express();
const port = 5000;

app.get(`/triangle`, (req, res) => {
    res.send('<h1>Triangle Area Calculator</h1><p>Enter the base and height to calculate the area.</p>');
});

app.listen(port, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});