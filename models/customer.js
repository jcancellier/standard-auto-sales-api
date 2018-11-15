'use strict';

module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('customer', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    drivers_license: DataTypes.STRING(32),
    dob: DataTypes.DATEONLY,
    issue_date: DataTypes.DATEONLY,
    expiration_date: DataTypes.DATEONLY,
    sex: DataTypes.STRING(1),
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING(2),
    zipcode: DataTypes.STRING(5)
  });

  Customer.associate = function (models) {
    Customer.hasMany(models.sale, {
      foreignKey: 'customer_id'
    })
  }

  return Customer;
};
