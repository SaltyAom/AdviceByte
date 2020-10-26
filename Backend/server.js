require('dotenv').config()
const express = require('express')
const mysql = require('mysql')
const db = mysql.createConnection({
  
host     : process.env.DB_IP,
database : process.env.DB_NAME, 
user     : process.env.DB_USER,
password : process.env.DB_PASS,
port : process.env.DB_PORT

})
const app = express()


db.connect(function(err) {
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


app.listen('3000',() => {     
console.log('start port 3000')  
})