'use strict';

module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('customer', {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull:false },
    drivers_license: { type: DataTypes.STRING(32), allowNull: true, unique: true},
    dob: {type: DataTypes.DATEONLY, allowNull:false},
    issue_date: DataTypes.DATEONLY,
    expiration_date: DataTypes.DATEONLY,
    sex: {type: DataTypes.STRING(1), allowNull:false},
    street: {type: DataTypes.STRING, allowNull:false},
    city: {type: DataTypes.STRING, allowNull:false},
    state: {type: DataTypes.STRING(2), allowNull:false},
    zipcode: {type: DataTypes.STRING(5), allowNull:false}
  });

  Customer.associate = function (models) {
    Customer.hasMany(models.sale, {
      foreignKey: 'customer_id'
    })
    Customer.hasMany(models.visit, {
      foreignKey: 'customer_id'
    })
  }

  return Customer;
};
