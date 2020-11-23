const express = require('express');

const router = express.Router();

const userController = require('../controllers/User');
const passport = require('../auth/passport.config');

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
);

router.get('/', userController.getUserLogin);


module.exports = router;