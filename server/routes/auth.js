const express = require('express');
const passport = require('passport');
const { register, login, googleAuth, googleAuthCallback } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/google', googleAuth);
router.get('/google/callback', passport.authenticate('google', { session: false }), googleAuthCallback);

module.exports = router;