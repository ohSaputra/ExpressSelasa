const db = require('../../config/dbMySql')

const getEmployee = (req, res) =>
  db.Employee
    .findAll({
      limit: 10
    })
    .then(result => {
      console.log(result)

      if (result)
        res
          .status(200)
          .json(result)
      else
        res
          .status(500)
          .json({ message: 'Data not found.' })
    })

module.exports = {
  getEmployee,
}