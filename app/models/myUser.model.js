// make your schema
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    paranoid: true,
  })
}