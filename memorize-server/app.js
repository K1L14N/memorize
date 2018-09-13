const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
require('./passport')(passport)

const authRoutes = require('./api/routes/auth')(passport)
const tableRoutes = require('./api/routes/tables')

// MongoDB connection through Mongoose
const options = {
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };
mongoose.connect('mongodb+srv://admin:' + process.env.MONGO_ATLAS_PW + '@keos-rbrco.mongodb.net/test?retryWrites=true', options)
  .then(result => {
      console.log("Connected to MongoDB cluster");
  })
  .catch(err => {
      console.log("Failed to connect to MongoDB cluster", err);
  })

// Express configuration
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(session({
    secret: "verysecret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000*60*10 },
  }))
app.use(passport.initialize());
app.use(passport.session());

// Header to handle CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next()
})

app.use('/auth', authRoutes)
app.use('/tables', tableRoutes)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app