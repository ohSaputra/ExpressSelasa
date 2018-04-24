const db = require('../../config/dbMySql')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { User } = db

// register
const registerUser = (req, res) => {
  const {username, password, email} = req.body

  console.log('registering user')

  return User
    .findOrCreate({
      where: {username: username},
      defaults: {
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
        email,
      }
    })
    .spread((user, created) => {

      if (created)
        res
          .status(201)
          .json(user)
      else
        res
          .status(500)
          .json({ error:  `error creating new user `})
    })
    .catch(e => res.send({ error: e }))
}

// login
const loginUser = (req, res) => {
  const {username, password} = req.body

  console.log('user login')

  return User
    .findOne({
      where: { username }
    })
    .then(user => {
      if (bcrypt.compareSync(password, user.password)) {
        console.log('found user')

        const token = jwt.sign({
          username
        }, `som3_s3cr3t`, { expiresIn: 60 * 60 })

        console.log(`token: ${token}`)

        res
          .status(200)
          .json({
            success: true,
            token
          })
      } else {
        console.log(`user not found`)

        res
          .status(404)
          .json({ message: `user not found` })
      }
    })
}

// authenticate
const authenticateUser = (req, res, next) => {
  const headerExist =  req.headers.authorization

  if(headerExist) {
    const token = req.headers.authorization

    jwt.verify(token, `som3_s3cr3t`, (error, decoded) => {
      if (error) {
        console.log(error)
        res
          .status(401)
          .json('Unauthorized')
      } else {
        req.user = decoded.username
        next()
      }
    })
  } else {
    res
      .status(403)
      .json(`No token provided.`)
  }
}

// export
module.exports = {
  register: registerUser,
  login: loginUser,
  authenticate: authenticateUser,
}
