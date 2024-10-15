
const express = require('express');
const { signupUser , loginUser} = require('../controllers/signUp');

const router = express.Router();


router.post('/signUp', signupUser);
router.post('/login', loginUser);


module.exports = router;
