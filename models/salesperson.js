'use strict';

module.exports = (sequelize, DataTypes) => {
  var SalesPerson = sequelize.define('salesperson', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    sex: DataTypes.STRING(1),
    ssn: DataTypes.STRING,
    saleslicense_id: DataTypes.STRING
  });

  SalesPerson.associate = function (models) {
    SalesPerson.hasMany(models.sale, {
      foreignKey: 'salesperson_id'
    })
  }

  return SalesPerson;
};
