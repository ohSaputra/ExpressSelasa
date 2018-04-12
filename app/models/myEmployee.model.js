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
  }, {
    freezeTableName: true,
    paranoid: true,
  })
}