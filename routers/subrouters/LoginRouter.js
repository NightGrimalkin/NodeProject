const express = require("express");
const loginRouter = express();

loginRouter.post("/", (req, res) => {
  const user = { email: req.body.email, password: req.body.password };
  //TODO sesja
  //zapisz w sesji ze zalogowany 
  // if w mainie ze jesli zalogowany to przekazuje strone main
  res.redirect();
});

module.exports = loginRouter;
