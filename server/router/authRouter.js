const express = require('express');
const router = express.Router();
const { authController } = require('../controller');
const { auth } = require('../helper/jwt');

const {
    allUser,
    register,
    login,
    keepLogin,
} = authController;

router.get('/list', allUser);
router.post('/register', register);
router.post('/login', login);
router.post('/keep-login', auth, keepLogin);

module.exports = router;
