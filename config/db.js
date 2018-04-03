// Database connection
const mongoose = require('mongoose')

// Employees Database url
const DB_URL = 'mongodb://localhost:27017/employees'

// connect to Database 
mongoose.connect(DB_URL)

// event handling on database connection
// ES 6
mongoose.connection.on('connected', () => 
  console.log(`Mongoose connected to ${DB_URL}`) )

// ES <6
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + DB_URL)
})

mongoose.connection.on('error', (err) => 
  console.log(`Mongoose connection error: ${err}`) )

mongoose.connection.on('disconnected', () => 
  console.log(`Mongoose Disconnected`) )

const gracefullShutdown = (msg, callback) =>
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`)
    callback()
  })

// For app termination
process.on('SIGINT', () =>
  gracefullShutdown('App termination (SIGINT)', () => 
    process.exit(0) ) )

// BRING YOUR SCHEMA & MODEL
require('../app/models/employee.model')