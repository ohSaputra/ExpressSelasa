## How to GET Data from Database Using [Sequelize](http://docs.sequelizejs.com/)

1. Use your schema in previous steps mine is `myEmployee.model.js` and my db file is `dbSql.js` at your controller file, mine is `myEmployee.controllers.js`

2. Import your database file in your controller file:
```js
// file: myEmployee.controllers.js
const db = require('../../config/dbMySql')
```

3. Use the `findAll` method from [sequelize](http://docs.sequelizejs.com/manual/tutorial/models-usage.html#-findall-search-for-multiple-elements-in-the-database) inside your function.
```js
// file: myEmployee.controllers.js
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
```

4. Dont forget to export it.
```js
// file: myEmployee.controllers.js
module.exports = {
  getEmployee,
}
```

5. Final Code will be like:
```js
// file: myEmployee.controllers.js
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
```

6. Import your controller into your route file.
```js
// file: routesSql.js
// import your controller
const ctrlEmployee = require('../app/controllers/myEmployee.controllers')

// new routing
router
  .route('/employee')
  .get(ctrlEmployee.getEmployee)
```

7. Use `localhost:3000/api/employee` to test your controller.