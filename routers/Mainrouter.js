const express = require("express");
const mainRouter = express.Router();

const registrationRouter = require("./subrouters/RegistrationRouter");
const loginRouter = require("./subrouters/LoginRouter");
const carInfoPageRouter = require("./subrouters/CarInfoPage");

mainRouter.use("/car", carInfoPageRouter);
mainRouter.use("/registration", registrationRouter);
mainRouter.use("/login", loginRouter);

const cars = [
  {
    name: "Mercedes_S_W116",
    torque: 226,
    power: 160,
  },
  {
    name: "Porsche_928",
    torque: 363,
    power: 240,
  },
  {
    name: "Renault_R5",
    torque: 52,
    power: 34,
  },
  {
    name: "Dodge_Challenger_I ",
    torque: 461,
    power: 279,
  },
  {
    name: "Lotus_Esprit",
    torque: 190,
    power: 162,
  },
  {
    name: "Volkswagen_Passat_I",
    torque: 120,
    power: 72,
  },
];
mainRouter.get("/", (req, res) => {
  const user = {
    userName:
      req.session.userName == ""
        ? "Proszę się zalogować"
        : req.session.userName,
    visitsNumber: "",
    lastLogin:
      req.cookies.last_login == undefined
        ? "Brak ostatniego logowania"
        : new Date(new Date(parseInt(req.cookies.last_login))),
  };
  let visits = req.cookies.number_of_visits;
  res.render("./pages/layout/mainPage", {
    carData: cars,
    userInfo: user,
    numberOfVisits: visits,
    pageName: "Strona Główna",
    pageToRender: "main",
  });
});

module.exports = mainRouter;
