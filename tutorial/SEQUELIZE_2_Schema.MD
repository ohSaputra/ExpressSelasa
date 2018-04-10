## Make Schema from SQL Database Using [Sequelize](http://docs.sequelizejs.com/)

1. Make your model, using `sequelize.import function` ([you can read further docs here](http://docs.sequelizejs.com/manual/tutorial/models-definition.html#import)) in `model` folder and name it with `my<Your_table>.model.js` mine will be named `myEmployee.model.js`

2. in your model file write down the below function:
```js
// file: myEmployee.model.js
module.exports = (sequelize, DataTypes) => {}
```

3. Define your table names inside `sequelize.define` function, my table name is `employees` so it will be like this:
```js
// file: myEmployee.model.js
// make your schema
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("employees", {}
}
```

4. Define your table structure inside the function:
```js
// file: myEmployee.model.js
// make your schema
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("employees", {
    emp_no: DataTypes.INTEGER,
    birth_date: DataTypes.DATE,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.ENUM('M', 'F'),
    hire_date: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }
}
```

5. If you have define your own primary key, you can add it inside the fields:
```js
// file: myEmployee.model.js
// make your schema
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("employees", {
    emp_no: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    birth_date: DataTypes.DATE,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.ENUM('M', 'F'),
    hire_date: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })
}
```

6. Lastly, add your model into the database constructure, my db file is `dbMySql.js`

```js
// IMPORT YOUR SCHEMA HERE
const db = {
  Employee: sequelize.import(path.join(__dirname, '../app/models/myEmployee.model')),

  // Export Database itself
  sequelize,
  Sequelize,
}
```

7. Dont forget to install [path](https://nodejs.org/api/path.html) package, and final database file will be like :

```js
// Call the Libraries
const Sequelize = require('sequelize')
const path = require('path')

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

// IMPORT YOUR SCHEMA HERE
const db = {
  Employee: sequelize.import(path.join(__dirname, '../app/models/myEmployee.model')),

  // Export Database itself
  sequelize,
  Sequelize,
}

module.exports = db
```

