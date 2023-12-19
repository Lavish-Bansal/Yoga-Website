const express = require('express');
const router = express.Router();
const user = require('../models/registration');

const {completePayment} = require('../controllers/authController')

router.route("/payment").post(completePayment)

module.exports = router;