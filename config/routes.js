const express = require('express')
const router = express.Router()

// controller
const ctrlUser = require('../app/controllers/user.controllers')

// routing
router
  .get('/', (req, res) => res.send('Hello world'))

router
  .route('/employee')
  .get(ctrlUser.getEmployee)
  .post(ctrlUser.addOneEmployee)

router
  .route('/employee/:id')
  .get(ctrlUser.getEmployeeByID)
  .put(ctrlUser.updateOneEmployee)
  .delete(ctrlUser.deleteUserByID)

router
  .route('/employee/name/:name')
  .get(ctrlUser.getEmployeeByName)

router
  .route('/salaries')
  .get((req, res) => res.json({ data: 'Hello this is salaries' }))
   
router
  .get('/:id/:name', ctrlUser.getUserByID)

module.exports = router