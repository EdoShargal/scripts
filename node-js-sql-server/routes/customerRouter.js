const express = require('express');
const router = express.Router();

const customerController = require("../controller/CustomerController")

router.get('/', customerController.getAllCategories)
router.get('/sp', customerController.getSp)

module.exports = router;