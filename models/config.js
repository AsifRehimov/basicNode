const mysql = require("mysql")

const dbcon = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs"
})

module.exports.dbConnection = dbcon
