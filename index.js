const express = require("express");
const db = require("./routes/db-config");
const mysql = require("mysql");
const app = express();
const dotenv = require("dotenv").config();
const cookie= require("cookie-parser");
const PORT = process.env.PORT || 5000;
app.use("/js", express.static(__dirname +"/public/js"))
app.use("/css", express.static(__dirname +"/public/css"))
app.use(express.json());
app.use(cookie());
app.set('view engine', "ejs");


db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MYSQL CONNECTED")
    }
})
// Define Routes
app.use('/', require('./routes/pages'));
app.use('/api', require("./Controllers/auth"));


app.listen(PORT)