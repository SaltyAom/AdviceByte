const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')

const User = require('../models/User');

passport.use('local-signup', new LocalStrategy({
    passReqToCallback: true
}, async (req, username, password, done) => {
    const user = await User.findOneByUsername(username);
    if (user) return done(null, false, req.flash('Error', 'This Username is already used.'))
    const newUser = await User.create(req.username, req.password, req.firstname, req.lastname, req.birthday);
    return done(null, newUser);
}))

passport.use('local-login', new LocalStrategy({
    passReqToCallback: true
}, async (req, username, password, done) => {
    const user = await User.findOneByUsername(username);
    if (!user) return done(null, false, req.flash('Error', 'Username does not exist.'))
    try {
        if (await bcrypt.compare(req.password, user.password)) {
            return done(null, user);
        } else {
            return done(null, false, req.flash('Error', 'Password incorrect.'))
        }
    } catch (error) {

    }
}))

passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser(async (id, done) => {
    const user = await User.findOneById(id);
    done(null, user);
})
module.exports = passport;