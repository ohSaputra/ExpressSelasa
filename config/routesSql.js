const express = require('express')
const router = express.Router()

// routing
router
  .get('/', (req, res) => res.send('Hello world'))

// new routing

module.exports = router