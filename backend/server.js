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
<<<<<<< HEAD

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], (err, data) => {
        if (err) return res.json("Register Failed");
        return res.json(data);
=======
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.query("SELECT * FROM USERS WHERE EMAIL = ?", [email], (err, data) => {
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
>>>>>>> 59767d7 (LoginRegister)
    })
})

app.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const sql = "SELECT * FROM USERS WHERE EMAIL = ? AND PASSWORD = ?";
    db.query(sql, [email, password], (err, data) => {
<<<<<<< HEAD
        if (err) return res.json("Login Failed");
        return res.json(data);
=======
        if (err){
            res.status(201).send(err);
            return data
        }
        else if(data.length > 0){
            res.status(201).send("ok");
            return data
        }
        else{
            res.status(201).send("nb");
            return data
        }
>>>>>>> 59767d7 (LoginRegister)
    })
})

app.listen(8081, () => {
    console.log("Listening...");
})