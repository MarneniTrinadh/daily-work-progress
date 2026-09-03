import express from 'express';
 
const app = express();

const port = 3000;

// const today = new Date();
// const currentDay = today.getDay();
// // console.log(currentDay);

// let type = "a weekday";
// let anouncement = "it's time to work!";
// if(currentDay === 0 || currentDay === 6) {
//     type = "a weekend day";
//     anouncement = "it's time to relax!";
// }
// app.get('/dayType', (req, res) => {
//     res.render("dayType.ejs", {
//         dayType: type,
//         anouncement: anouncement,
//     });
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// app.get('/EJS', (req, res) => {
//   const data = {
//     title: "EJS Tags",
//     seconds: new Date().getSeconds(),
//     items: ["apple", "banana", "cherry"],
//     htmlContent: "<strong>This is some strong text</strong>",
//     };
//   res.render("index.ejs", data);
// });

// app.get('/', (req, res) => {
//   res.redirect('/EJS');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


app.use(express.static("public"));
app.get("/", (req, res) => {
  res.redirect("/portfolio");
});

app.get("/portfolio", (req, res) => {
  res.render("Portfolio.ejs", { currentPage: "portfolio", pageTitle: "Trinadh Marneni | Portfolio" });
});

app.get("/about", (req, res) => {
  res.render("about.ejs", { currentPage: "about", pageTitle: "About | Trinadh Marneni" });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs", { currentPage: "contact", pageTitle: "Contact | Trinadh Marneni" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
