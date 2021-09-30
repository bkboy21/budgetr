//Express required to run app
const express = require("express");
const budget = require("./models/budget.js");


const app = express();
const port = 3000;

const Budget = require("./models/budget.js");

// Middleware:
app.use(express.static("public"));
var bodyParser = require('body-parser')


app.use((req, res, next) => {
    console.log("I run for all routes!");
    next();
});
app.use(express.urlencoded({ extended: false }));





// INDEX
app.get('/budgets', (req, res) => {
    res.render("index.ejs", { allBudget: budget });
});


// NEW
app.get('/budgets/new', (req, res) => {
    res.render("new.ejs");
});



// need to copltes 
app.post('/budgets/new', (req, res) => {
    res.render("new.ejs");
});



// create
app.post('/budgets', (req, res) => {
    res.render("new.ejs");
});

// show
app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs', {
		allBudget: budget[req.params.index]
	});
});











// Express Web Server port - app.listen
app.listen(port, () => {
    console.log(`listening on port`, port)
});