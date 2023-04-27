const express = require("express");
const mainRouter = express.Router();

const registrationRouter = require("./subrouters/RegistrationRouter");
const loginRouter = require("./subrouters/LoginRouter");
const carInfoPageRouter = require("./subrouters/CarInfoPage");

mainRouter.use("/car", carInfoPageRouter);
mainRouter.use("/registration", registrationRouter);
mainRouter.use("/login", loginRouter);


const cars = [
  { name: "Jelcz", torque: 113, power: 82, imageSource: "/images/jelcz_about.jpg"},
  { name: "Jelcz", torque: 113, power: 82, imageSource: "/images/jelcz_about.jpg"},
  { name: "Jelcz", torque: 113, power: 82, imageSource: "/images/jelcz_about.jpg"},
];

mainRouter.get("/", (req, res) => {
  const user = {
    userName:
      req.session.userName == ""
        ? "Proszę się zalogować"
        : req.session.userName,
    last_login:
      req.cookies.last_login == undefined
        ? "Brak ostatniego logowania"
        : new Date(new Date(parseInt(req.cookies.last_login))),
  };
  res.render("./pages/layout/mainPage", {
    carData: cars,
    userInfo: user,
    pageName: "Strona Główna",
    pageToRender: "main",
  });
});

module.exports = mainRouter;
