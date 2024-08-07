const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

let userEmail = "";

app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'minadeaco'
})

app.post('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confPassword = req.body.confPassword;
    const user = req.body.user;
    console.log(user);
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.query("SELECT * FROM users WHERE EMAIL = ?", [email], (err, data) => {
        if (data.length > 0) {
            res.status(201).send("jc");
            return data
        }
        else if (password == confPassword) {
            db.query(sql, [name, email, password], (err, data) => {
                if (err) {
                    res.status(201).send(err)
                    return data
                }

                res.status(201).send("ok")
                return data
            })
        }
        else {
            res.status(201).send("si");
            return
        }
    })
})

app.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const sql = "SELECT * FROM USERS WHERE EMAIL = ? AND PASSWORD = ?";
    db.query(sql, [email, password], (err, data) => {
        if (err) {
            res.status(201).send(err);
            return data
        }
        else if (data.length > 0) {
            res.status(201).send("ok");
            userEmail = email;
            return data
        }
        else {
            res.status(201).send("nb");
            return data
        }
    })
})

app.listen(8081, () => {
    console.log("Listening...");
})