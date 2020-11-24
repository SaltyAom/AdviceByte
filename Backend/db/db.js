module.exports = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_IP,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
    },
    migrations: {
        directory: __dirname + '/db/migrations',
    },
});
// const mysql = require('mysql2/promise')
// const pool = mysql.createPool({
//     host: process.env.DB_IP,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     port: process.env.DB_PORT,
//     waitForConnections: true,
//     connectionLimit: 15,
//     queueLimit: 0
// })
// module.exports = pool;