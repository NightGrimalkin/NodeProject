const express = require("express");
const session = require("express-session");
const carInfoPageRouter = express.Router();

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

carInfoPageRouter.get("/:page", (req, res) => {
  const chosenCarName = req.params.page;
  let chosenCar;
  cars.forEach((car) => {
    if (car.name == chosenCarName) {
      chosenCar = car;
      chosenCar.imageSource = chosenCarName + ".jpg";
    }
  });
  const user = {
    userName: req.session.userName,
    visitsNumber:
      req.cookies.number_of_visits!= undefined
        ? req.cookies.number_of_visits[chosenCarName]
        : "",
  };
  if (req.session.logged_in == true) {
    if (chosenCar != undefined) {
      let numberOfVisits = req.cookies.number_of_visits;
      if (numberOfVisits != undefined) {
        numberOfVisits[chosenCarName] = numberOfVisits[chosenCarName] + 1;
      } else {
        numberOfVisits = {};
        numberOfVisits[chosenCarName] = 1;
      }
      res.cookie("number_of_visits", numberOfVisits, { maxAge: 900000 });
      res.render("./pages/layout/chosenCar", {
        car: chosenCar,
        userInfo: user,
        pageName: chosenCarName,
      });
    } else {
      res.send("<h1>Strona nie istnieje</h1>");
    }
  } else {
    res.redirect("/login");
  }
});

module.exports = carInfoPageRouter;
