
const express = require('express');
const { signup, login, getProfile } = require('../controllers/authController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);


router.get('/me', authenticate, getProfile); // this routing will require a valid JWT from user 

module.exports = router;
