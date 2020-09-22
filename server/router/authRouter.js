const express = require('express');
const router = express.Router();
const { authController } = require('../controller');

const {
    allUser,
    truncate,
    signup,
} = authController;

router.get('/list', allUser);
router.delete('/truncate', truncate);
router.post('/signup', signup);

module.exports = router;
