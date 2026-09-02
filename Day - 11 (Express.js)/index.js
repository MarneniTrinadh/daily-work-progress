import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/user/about", (req, res) => {
    res.send("<h1>About</h1><p>My name is Trinadh.</p>");
});

app.get("/user/contact", (req, res) => {
    res.send("<h1>Contact</h1><p>My number is 9846251577.</p>");
}); 

app.post("/user/create", (req, res) => {
    res.send("Create route");
});

app.put("/user/update", (req, res) => {
    res.send("Update route");
});


app.delete("/user/delete", (req, res) => {
    res.send("Delete route");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});