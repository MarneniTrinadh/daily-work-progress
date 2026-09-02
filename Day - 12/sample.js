// console.log("Hello, World!");
// //Built -in Modules in Node.js
// // OS(Operating System):
// const os = require('os');
// console.log("Operating System Info:");
// console.log("Platform: " + os.platform());
// console.log("Architecture: " + os.arch());
// console.log("Total Memory: " + os.totalmem());
// console.log("Free Memory: " + os.freemem());

// //Path Module:
// const path = require('path');
// console.log("\nPath Module Info:");
// console.log("Directory Name: " + path.dirname(__filename));
// console.log("Base Name: " + path.basename(__filename));
// console.log("Extension: " + path.extname(__filename));

// //File System Module:
// //CURD: create, read, update, delete
// //Create a file
// const fs = require('fs');
// fs.writeFile('sample.txt', 'utf-8', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('File created successfully!');
//     }
// });


// fs.writeFile('sample.txt', 'Hello, this is a sample text file.', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('File created successfully!');
//     }
// });

// //Update a file

// fs.appendFile('sample.txt', '\nThis is an appended text.', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('File updated successfully!');
//     }
// });

// //Read a file

// fs.readFile('sample.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('File content: ' + data);
//     }
// });

// //Rename a file

// fs.rename('sample.txt', 'renamed_sample.txt', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('File renamed successfully!');
//     }
// });


// fs.writeFile('Date.txt', 'Hello, this is a sample text file.', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('File created successfully!');
//     }
// });

// Delete a file

// fs.unlink('Date.txt', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('File deleted successfully!');
//     }
// });

//HTTP Module:
// const http = require('http');
// const myServer = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Hello, World!</h1>');
//     res.write('<p>This is a sample HTTP server.</p>');
//     res.end();
// });

// myServer.listen(5500, () => {
//     console.log('Server is running on http://localhost:5500');
// });

//importing a custom module
// const {addNumbers, subtractNumbers, multiplyNumbers, divideNumbers} = require('./demomodule');
// console.log("Addition: " + addNumbers(5, 3));
// console.log("Subtraction: " + subtractNumbers(5, 3));
// console.log("Multiplication: " + multiplyNumbers(5, 3));
// console.log("Division: " + divideNumbers(5, 3));

//Express.js
// const express = require('express');
// const app = express();
// const port = 5000;

// app.get(`/triangle`, (req, res) => {
//     res.send('<h1>Triangle Area Calculator</h1><p>Enter the base and height to calculate the area.</p>');
// });

// app.listen(port, (err) => {
//     if (err) {
//         console.error('Error starting the server:', err);
//     } else {
//         console.log(`Server is running on http://localhost:${port}`);
//     }
// });

//Middlewares in Express.js using typescript
const express = require('express');
// const morgan = require('morgan');

const app = express();
// app.use(morgan('dev'));

const port = 5000;
const firstMiddleware = (req, res, next) => {
    console.log('First middleware executed');
    next();
};

app.get(`/triangle`, firstMiddleware, (req, res) => {
    res.send('<h1>Triangle Area Calculator</h1><p>Enter the base and height to calculate the area.</p>');
});
