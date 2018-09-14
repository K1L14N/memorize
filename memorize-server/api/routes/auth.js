const User = require('../models/User')
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const access = require('../access')

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
            },
            (err, passportUser, info) => {
                if (err) {
                    res.status(500).json({
                        error: err.message
                    })
                }
                if (!passportUser) {
                    res.status(400).json({
                        message: "Passport can not retrieve your id"
                    })
                }
                const user = new User({
                    _id: passportUser.id,
                    username: passportUser.username
                });
                user.token = user.generateJWT();

                // Adding information to the header, allows to use `req.isAuthenticated()`
                req.logIn(user, function (err) {
                    if (err) {
                        res.status(500).json({
                            message: "Passport can not log you in"
                        })
                        return;
                    }
                    return;
                });

                res.status(200).json({
                    user: user.toAuthJSON()
                });
            })(req, res, next)
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
                    return res.status(400);
                }

                return res.json({
                    user: user.toAuthJSON()
                });
            })
            .catch(err => {
                return res.status(500).json({
                    error: err.message
                })
            });
    });

    router.get('/logout', access.required, (req, res, next) => {
        req.logOut();
        if (req.isAuthenticated()) {
            res.status(400).json({
                message: "An error occured while logout"
            })
        } else {
            res.status(200).json({
                message: "Logout successful"
            })
        }
    })

    router.get('/all', access.required, (req, res, next) => {
        return User.find()
            .exec()
            .then(users => {
                res.status(200).json({
                    users
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err.message
                })
            })
    })

    return router;
};