const express = require("express");
const loginRouter = express();
const db = require("../../mysql/database");

const sql = "Select * from users where email = ? and password = ?";

loginRouter.post("/", (req, res) => {
  const user = { email: req.body.email, password: req.body.password };
  //TODO sesja
  //zapisz w sesji ze zalogowany 
  // if w mainie ze jesli zalogowany to przekazuje strone main
  db.query(sql,[user.email,user.password],(err,data)=>{
    if (err) throw err;

    if(data.length>0){
      //SUPER ZALOGOWALES SIE JUPI ZAJEBISCIE
    }else{
      //Nosz kur ://
    }
  })
  res.redirect()
});

module.exports = loginRouter;
