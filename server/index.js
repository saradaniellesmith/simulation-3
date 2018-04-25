require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const passport = require("passport");
const massive = require('massive');
const port = process.env.PORT || 3003;
const { SESSION_SECRET, CONNECTION_STRING } = process.env;

const mainCtrl = require("./controller/mainCtrl");

//use if building for production 
// app.use(express.static(`${__dirname}/../build`));

const app = express();

massive(CONNECTION_STRING)
    .then(db => {
        app.set("db", db);
    })
    .catch(err => {
        console.log(err);
    });

app.use(cors());
app.use(json());

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 100000
        }
    })
);

app.get("/songs", mainCtrl.getSongs );

app.listen(port, () => {
    console.log(`Port listening on ${port}`);
});