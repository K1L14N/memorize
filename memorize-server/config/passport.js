const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const User = require('../api/models/User')

module.exports = function(passport) {

    passport.use(new LocalStrategy({
        usernameField: 'user[username]',
        passwordField: 'user[password]',
    }, (username, password, done) => {
        User.findOne({
                username
            })
            .then((user) => {
                if (!user || !user.comparePassword(password)) {
                    return done(null, false, {
                        errors: {
                            'username or password': 'is invalid'
                        }
                    });
                }
    
                return done(null, user);
            }).catch(done);
    }));
}