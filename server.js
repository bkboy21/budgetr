//Express required to run app
const express = require("express");
const methodOverride = require("method-override");

const app = express();
const port = 3000;

const iList = require("./models/budget.js");

// INDEX
app.get('/budgets', (req, res)=>{
    res.render("index.ejs", { allFruits: fruits });
});


app.get('/budgets/:index', (req, res)=>{
    res.render("index.ejs", { allFruits: fruits });
});


// NEW
app.get('/budgets/new', (req, res) => {
    res.render("new.ejs");
});



// post
app.get('/budgets', (req, res) => {
    res.render("new.ejs");
});








// Express Web Server port - app.listen
app.listen(port, ()=>{
    console.log(`listening on port`, port)
});