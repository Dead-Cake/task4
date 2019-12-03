const express = require('express'),
    jwt = require('jsonwebtoken'),
    bodyParser = require("body-parser"),
    PORT = process.env.PORT || 3000,
    app = express(),
    func = require('./helper');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/registration',function (req,res) {
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
    func.registration(userName,email,password);
});