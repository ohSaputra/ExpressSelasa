// Call the Libraries
const Sequelize = require('sequelize')
const path = require('path')

const DATABASE = 'employees'
const USERNAME = 'root'
const PASSWORD = 'anjay'

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been made.')
  })
  .catch(err => console.error(err))

// IMPORT YOUR SCHEMA HERE
const db = {
  Employee: sequelize.import(path.join(__dirname, '../app/models/myEmployee.model')),

  // Export Database itself
  sequelize,
  Sequelize,
}

module.exports = db