const express = require('express');
const { protect } = require('../Authorization/Authorization');
const { makeOrder } = require('../controller/OrderController');
const router = express.Router();

router.route('/').post(protect,makeOrder);

module.exports = router;
