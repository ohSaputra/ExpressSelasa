> ADD MYSQL DATABASE to Express :

1. Install sequelize package from npm using `npm install --save sequelize` or `yarn add sequelize`
2. Install mysql2 package from npm using `npm install --save mysql2` or `yarn add mysql2`
3. Setup your connection in your `db` config files.
```js
const Sequelize = require('sequelize')
const sequelize = new Sequelize('database', 'username','password', {
  host: 'localhost',
  dialect: 'mysql',
})
```
4. Check your connection status using.
```js
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
```
