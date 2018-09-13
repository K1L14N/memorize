const User = require('../models/User')
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const access = require('../access')
const passport = require('passport')

module.exports = function (passport) {
    router.post('/signup', access.optional, (req, res, next) => {
        const {
            body: {
                user
            }
        } = req;

        if (!user.username) {
            return res.status(422).json({
                errors: {
                    username: 'is required',
                },
            });
        }

        if (!user.password) {
            return res.status(422).json({
                errors: {
                    password: 'is required',
                },
            });
        }

        // Hashing password
        const finalUser = new User({
            _id: new mongoose.Types.ObjectId(),
            username: user.username,
            password: user.password
        });

        finalUser.password = finalUser.hashPassword(finalUser.password)

        return finalUser.save()
            .then(() => res.json({
                user: finalUser.toAuthJSON()
            }));
    });


    router.post('/login', access.optional, (req, res, next) => {
        const {
            body: {
                user
            }
        } = req;

        if (!user.username) {
            return res.status(422).json({
                errors: {
                    username: 'is required',
                },
            });
        }

        if (!user.password) {
            return res.status(422).json({
                errors: {
                    password: 'is required',
                },
            });
        }

        return passport.authenticate('local', {
            session: false
        }, (err, passportUser, info) => {
            if (err) {
                return next(err);
            }

            if (passportUser) {
                const user = passportUser;
                user.token = passportUser.generateJWT();

                return res.json({
                    user: user.toAuthJSON()
                });
            }

            return status(400).info;
        })(req, res, next);
    });

    router.get('/current', access.required, (req, res, next) => {
        const {
            payload: {
                id
            }
        } = req;
        return User.findById(id)
        .then((user) => {
            if (!user) {
                    return res.sendStatus(400);
                }

                return res.json({
                    user: user.toAuthJSON()
                });
            });
    });

    return router;
};