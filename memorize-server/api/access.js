const jwt = require('express-jwt');

const getTokenFromHeaders = (req) => {
  const { headers: { authorization } } = req;

  if(authorization && authorization.split(' ')[0] === 'Token') {
    return authorization.split(' ')[1];
  }
  return null;
};

const loggedIn = (req, res, next) => {
  req.isAuthenticated() ? next() : res.status(401).json({ message: "You are not logged in"})
}

const access = {
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
  pass: loggedIn
};

module.exports = access;