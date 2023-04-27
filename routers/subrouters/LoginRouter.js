const express = require("express");
const loginRouter = express();
const db = require("../../mysql/database");

const sql = "Select * from users where email = ? and password = ?";

const user = {
  userName: "Proszę się zalogować",
  visits: 10,
};

loginRouter.get("/", (req, res) => {
  res.render("./pages/layout/mainPage", {
    userInfo: user,
    pageName: "Logowanie",
    pageToRender: "login",
    msg: "",
  });
});

loginRouter.post("/auth", (req, res) => {
  const user = { email: req.body.email, password: req.body.password };

  db.query(sql, [user.email, user.password], (err, data) => {
    if (err) throw err;

    if (data.length > 0) {
      //SUPER ZALOGOWALES SIE JUPI ZAJEBISCIE
    } else {
      //Nosz kur ://
    }
  });
  res.redirect();
});

module.exports = loginRouter;
