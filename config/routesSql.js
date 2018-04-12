const express = require('express')
const router = express.Router()

// import your controller
const ctrlEmployee = require('../app/controllers/myEmployee.controllers')

// routing
router
  .get('/', (req, res) => res.send('Hello world'))

// new routing
router
  .route('/employee')
  .get(ctrlEmployee.getEmployee)

router
  .route('/employee/:id')
  .delete(ctrlEmployee.deleteEmployee)

module.exports = router