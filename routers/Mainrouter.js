const express = require("express");
const mainRouter = express();

const registrationRouter = require("./subrouters/RegistrationRouter");
const loginRouter = require("./subrouters/LoginRouter");
const carInfoPageRouter = require("./subrouters/CarInfoPage");

mainRouter.use("/registration", registrationRouter);
mainRouter.use("/login", loginRouter);
mainRouter.use("/car ", carInfoPageRouter);

const user = {
  userName: "Gary",
  visits: 10,
};

const cars = [{ name: "Jelcz" }, { name: "Penis" }, { name: "Chuj" }];

mainRouter.get("/", (req, res) => {
  res.render("./pages/layout/mainPage", {
    carData: cars,
    userInfo: user,
    pageName: "Strona Główna",
    pageToRender: "main",
  });
});

module.exports = mainRouter;
