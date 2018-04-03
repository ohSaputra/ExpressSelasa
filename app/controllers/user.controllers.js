const mongoose = require('mongoose')
const Employee = mongoose.model('Employee')

// Router
// Value: Request, Result, etc.
// Request: Data yang di kirim dari Klien
// Respond: Fungsi dari Server, Isi Fungsi dengan data yang dikirim
module.exports.getEmployee = (req, res) =>
  Employee
    .find()
    .exec((err, result) => {
      console.log(err)
      console.log(result)

      // Filter respond dari Server
      // Error dari server
      if(err) {
        console.log('Error finding Employee')
        res
          .status(500)
          .json({ message: 'Error finding Employee' })

      // Data tidak ditemukan
      } else if (result.length == 0) {
        console.log('Data Employee not found')
        res
          .status(404)
          .json({ message: 'Data not found' })

      // Data ditemukan
      } else {
        console.log(`Found Employee: ${result.length}`)
        res
          .status(200)
          .json(result)
      }
    })


// Get Employee Data by ID
module.exports.getEmployeeByID = (req, res) => {
  const { id } = req.params
  console.log(`GET Employee with ${id}`)

  return Employee
    .findById(id)
    .exec((err, result) => {
      console.log(err)
      console.log(result)


      // Filter respond dari Server
      // Error dari server
      if(err) {
        console.log('Error finding Employee')
        res
          .status(500)
          .json({ message: 'Error finding Employee' })

      // Data tidak ditemukan
      } else if (result.length == 0) {
        console.log('Data Employee not found')
        res
          .status(404)
          .json({ message: 'Data not found' })

      // Data ditemukan
      } else {
        console.log(`Found Employee with ID: ${id}`)
        res
          .status(200)
          .json(result)
      }
    })
}

// Get Employee Data by ID
module.exports.getEmployeeByName = (req, res) => {
  const { name } = req.params
  console.log(`GET Employee with ${name}`)

  return Employee
    .find({ first_name: name })
    .exec((err, result) => {
      console.log(err)
      console.log(result)


      // Filter respond dari Server
      // Error dari server
      if(err) {
        console.log('Error finding Employee')
        res
          .status(500)
          .json({ message: 'Error finding Employee' })

      // Data tidak ditemukan
      } else if (result.length == 0) {
        console.log('Data Employee not found')
        res
          .status(404)
          .json({ message: 'Data not found' })

      // Data ditemukan
      } else {
        console.log(`Found Employee with First Name: ${name}`)
        res
          .status(200)
          .json(result)
      }
    })
}

// Insert an Employee
module.exports.addOneEmployee = (req, res) => {
  const { first_name, last_name, gender,
          birth_date, hire_date } = req.body
  console.log(`POST new Employee`)
  console.log(`Trying to add new Employee`)

  return Employee
    .create({
      first_name,
      last_name,
      gender,
      birth_date,
      hire_date,
    }, (err, result) => {

      // Filter respond dari Server
      // Error dari server
      if(err) {
        console.log('Error creating Employee')
        res
          .status(500)
          .json({
            ...err
          })

      // Data ditemukan
      } else {
        console.log(`Employee created: ${result}`)
        res
          .status(201)
          .json({
            message: 'Employee sucessfully created.',
            data: result,
          })
      }
    })
}

// Update an employee
module.exports.updateOneEmployee = (req, res) => {
  const { id } = req.params
  const { first_name, last_name, gender,
    birth_date, hire_date } = req.body

  return Employee
    .findById(id)
    .exec((err, employee) => {
      if (err) {
        console.log(`Error finding Employee with id: ${id}`)

        // Kirim respond
        employee
          .status(500)
          .json(err)
      } else if (!employee) {
        console.log('Data Employee not found')
        res
          .status(404)
          .json({ message: 'Data not found' })
      } else {

        if (first_name)
          employee.first_name = first_name

        if (last_name)
          employee.last_name = last_name

        if (gender)
          employee.gender = gender

        if (birth_date)
          employee.birth_date = birth_date

        if (hire_date)
          employee.hire_date = hire_date

        // Save to database
        employee
          .save((err, updatedEmployee) => {
            if (err)
              res
                .status(500)
                .json(err)
            else
              res
                .status(201)
                .json(updatedEmployee)
          })
      }

    })
}

// module.exports.updateOneEmployee = (req, res) =>
//   Employee
//     .findByIdAndUpdate(

//       // ID
//       req.params.id,

//       // body data
//       { $set: { ...req.body }},

//       // callback
//       err => {
//         if (err)
//           res
//             .status(500)
//             .json(err)
//         else
//           res
//             .status(204)
//             .json()
//       }
//     )

module.exports.deleteUserByID = (req, res) => {
  const { id } = req.params
  console.log(`DELETE User by ID: ${id}`)

  return Employee
    .findByIdAndRemove(id)
    .exec((err, result) => {
      if(err)
        res
          .status(500)
          .json(err)
      else
        res
          .status(204)
          .json()
    })
}

module.exports.getUserByID = (request, respond) =>
  respond.send({
    id: request.params.id,
    name: request.params.name,
  })