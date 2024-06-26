const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'minadeaco'
})

app.post('/register', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const confPassword = req.body.confPassword

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], (err, data) => {
        if (err) return res.json("Register Failed");
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const sql = "SELECT * FROM USERS WHERE EMAIL = ? AND PASSWORD = ?";
    db.query(sql, [email, password], (err, data) => {
        if (err) return res.json("Login Failed");
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("Listening...");
})