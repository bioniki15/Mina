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
    const user = req.body.user;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confPassword = req.body.confPassword;
    let sqlRegister = "";
    let sqlSearch = ""
    if (user == "empresa") {
        sqlRegister = "INSERT INTO empresa (email, name, password) VALUES (?, ?, ?)";
        sqlSearch = "SELECT * FROM empresa WHERE EMAIL = ?";
    }
    else if (user == "coletor"){
        sqlRegister = "INSERT INTO coletor (email, name, password) VALUES (?, ?, ?)";
        sqlSearch = "SELECT * FROM coletor WHERE EMAIL = ?";
    }
    if (user == "fornecedor"){
        sqlRegister = "INSERT INTO fornecedor (email, name, password) VALUES (?, ?, ?)";
        sqlSearch = "SELECT * FROM fornecedor WHERE EMAIL = ?";
    }

    db.query(sqlSearch, [email], (err, data) => {
        if (err) {
            console.log(err)
            res.status(201).send(err);
            return err
        }
        if (data.length > 0) {
            res.status(201).send("jc");
            return data
        }
        else if (password == confPassword) {
            db.query(sqlRegister, [email, name, password], (err, data) => {
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
    const user = req.body.user
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    let sql = "";
    if(user == "empresa") sql = 'SELECT * FROM empresa WHERE EMAIL = ? AND PASSWORD = ? AND NAME = ?'
    else if(user == "coletor") sql = 'SELECT * FROM coletor WHERE EMAIL = ? AND PASSWORD = ? AND NAME = ?'
    else if(user == "fornecedor") sql = 'SELECT * FROM fornecedor WHERE EMAIL = ? AND PASSWORD = ? AND NAME = ?'

    db.query(sql, [email, password, name], (err, data) => {
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