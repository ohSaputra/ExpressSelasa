// Call the Libraries
const Sequelize = require('sequelize')

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

module.exports = sequelize