const express = require("express")
const mysql = require("mysql")
const app = express()
const cors = require('cors');

mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs"
})

app.use(cors());
app.use(express.static('public'))
app.set("view engine", "ejs")
app.set('views', __dirname+'/views/');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const useRouter = require("./roots/indexRooter")
app.use("/", useRouter)

app.listen(2003)
