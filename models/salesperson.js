'use strict';

module.exports = (sequelize, DataTypes) => {
  var SalesPerson = sequelize.define('salesperson', {
    saleslicense_id: {type: DataTypes.STRING, allowNull:false},
    first_name: {type: DataTypes.STRING, allowNull:false},
    last_name: {type: DataTypes.STRING, allowNull:false},
    dob: {type: DataTypes.DATEONLY, allowNull:false},
    street: {type: DataTypes.STRING, allowNull:false},
    city: {type: DataTypes.STRING, allowNull:false},
    state: {type: DataTypes.STRING, allowNull:false},
    zipcode: {type: DataTypes.STRING, allowNull:false},
    sex: {type: DataTypes.STRING(1), allowNull:false},
    ssn: {type: DataTypes.STRING, allowNull:false, unique:true},
  });

  SalesPerson.associate = function (models) {
    SalesPerson.hasMany(models.sale, {
      foreignKey: 'salesperson_id'
    })
    SalesPerson.hasMany(models.visit, {
      foreignKey: 'salesperson_id'
    })
  }

  return SalesPerson;
};
