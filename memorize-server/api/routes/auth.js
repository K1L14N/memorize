const User = require('../models/User')
const express = require('express');
const router = express.Router();

module.exports = function (passport) {
    router.post('/signup', function (req, res) {
        var body = req.body,
            username = body.username,
            password = body.password;
        User.findOne({
            username: username
        }, function (err, doc) {
            if (err) {
                res.status(500).json({
                    error: err.message
                })
            } else {
                if (doc) {
                    res.status(208).json({
                        message: "User already exists"
                    })
                } else {
                    var record = new User()
                    record.username = username;
                    record.password = record.hashPassword(password)
                    record.save(function (err, user) {
                        if (err) {
                            res.status(500).json({
                                errror: err.message
                            })
                        } else {
                            res.status(200).json({user})
                        }
                    })
                }
            }
        })
    });


    router.post('/login', passport.authenticate('local'), (req, res) => {
        User.find({
            username: req.body.username,
            password: req.body.password,
        })
        res.status(200).json({
            message: "Ok"
        })
    })
    return router;
};

const jwt = require('express-jwt')

const getTokenFromHeaders = (req) => {
    const { headers: { authorization } } = req;

    if (authorization && authorization.split(' ')[0] === 'Token') {
        return authorization.split(' ')[1];
    }
    return null
}

const auth = {
    required: jwt({
        secret: 'verysecret',
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
    }),
    optional: jwt({
        secret: 'verysecret',
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
        credentialsRequired: false,
    }),
}

module.exports = auth