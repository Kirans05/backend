const express = require('express');
const router = express.Router();
const {
  userSignUp,
  loginUser,
} = require('../controller/UserController');

router.route('/').post(userSignUp);
router.route('/login').post(loginUser);

module.exports = router;