const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const user = require("../models/registration");

app.use(bodyParser.json());

const completePayment = async (req, res) => {
  try {
    const newUser = new user({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      age: req.body.age,
      batch: req.body.batch,
    });

    const registered = await newUser.save();
    // console.log(registered);
    res.json({"message": "submitted"});
    // res.status(200);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = {completePayment}
