const express = require('express')
const router = express.Router()

// import your controller
const ctrlEmployee = require('../app/controllers/myEmployee.controllers')
const ctrlUser = require('../app/controllers/myUser.controllers')

// routing
router
  .get('/', (req, res) => res.send('Hello world'))

// new routing
router
  .route('/employee')
  .get(ctrlUser.authenticate, ctrlEmployee.getEmployee)

router
  .route('/employee/:id')
  .delete(ctrlUser.authenticate, ctrlEmployee.deleteEmployee)

router
  .route('/register')
  .post(ctrlUser.register)

router
  .route('/login')
  .post(ctrlUser.login)

module.exports = router