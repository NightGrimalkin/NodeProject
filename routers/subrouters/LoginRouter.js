const express = require("express");
const loginRouter = express.Router();
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
    if (err) {
      throw err;
    }
    if (data.length > 0) {
      req.session.logged_in = true;
      req.session.userName = data[0].username;
      res.cookie("last_login", Date.now(), { maxAge: 900000 });
      res.redirect("/");
    } else {
      res.redirect("/login");
    }
  });
});

module.exports = loginRouter;
