const express = require('express');
const registrationRouter = express();
const db = require("../../mysql/database");

const sql = 'SELECT * FROM registration WHERE username = ?';

registrationRouter.post("/",(req,res)=>{
    const user = {username: req.body.username, email: req.body.email, password: req.body.password };
    db.query(sql,[user.username],(err,data)=>{
        if(err) throw err;
        if(data.length>1){
            //Jest już ktoś taki i guess
        }else{
            const sql = "INSERT INTO users(id,username,password,email) values (0,?,?,?)";
            db.query(sql,[user.username,user.password,user.email],(err,data)=>{
                if(err) throw err;
                //Udana rejestracja
            })
        }
    })
})

module.exports = registrationRouter;