require('dotenv').config();


const express = require('express');
const passport = require('./auth/passport.config.js');
const app = express();

// const mysql = require('mysql')
// const db = mysql.createConnection({

//   host: process.env.DB_IP,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   port: process.env.DB_PORT

// })

const session = require('express-session');
const knex = require('./db/db');
const knexSessionStore = require('connect-session-knex')(session);
const store = new KnexSessionStore({
  knex: knex,
  tablename: "sessions"
});


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    store: store
  })
);



// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


// db.query('SELECT * FROM Learning_Style', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });

// app.get('/', function (req, res) {
//   res.send('hello world')
// })
// db.end();

app.use(passport.initialize());
app.use(passport.session());

//app.use("", appRoutes);
//app.use("/api", apiRoutes);


app.listen('3000', () => {
  console.log('start port 3000')
})