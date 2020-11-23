require('dotenv').config()


const express = require('express')
const app = express()
// const mysql = require('mysql')
// const db = mysql.createConnection({

//   host: process.env.DB_IP,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   port: process.env.DB_PORT

// })

const knex = require('./db/knex');
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



db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


db.query('SELECT * FROM Learning_Style', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

app.get('/', function (req, res) {
  res.send('hello world')
})
db.end();


app.listen('3000', () => {
  console.log('start port 3000')
})