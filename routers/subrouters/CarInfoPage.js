const express = require("express");
const carInfoPageRouter = express.Router();

const cars = [
  {
    name: "Jelcz",
    torque: 113,
    power: 82,
    imageSource: "/images/jelcz_about.jpg",
  },
  {
    name: "Jelcz",
    torque: 113,
    power: 82,
    imageSource: "/images/jelcz_about.jpg",
  },
  {
    name: "Jelcz",
    torque: 113,
    power: 82,
    imageSource: "/images/jelcz_about.jpg",
  },
];

carInfoPageRouter.get("/:page", (req, res) => {
  const chosenCarName = req.params.page;
  let chosenCar;
  cars.forEach((car) =>{
    if(car.name==chosenCarName){
        chosenCar=car;
        chosenCar.imageSource=chosenCarName+".jpg";
        console.log(chosenCar);
    }
  })
  res.render('./pages/layout/chosenCar',{car: chosenCar})
});


module.exports = carInfoPageRouter;
