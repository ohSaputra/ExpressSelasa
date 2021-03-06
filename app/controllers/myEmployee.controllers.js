const db = require('../../config/dbMySql')
const { Employee } = db

const getEmployee = (req, res) =>
  Employee
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

// delete employee
const deleteEmployee = (req, res) => {
  const { id } = req.params

  return Employee
    .destroy({
      where: { emp_no: id }
    })
    .then(() =>
      res
        .status(204)
        .json({})
    )

}

module.exports = {
  getEmployee,
  deleteEmployee,
}