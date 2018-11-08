'use strict';

module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('customer', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    drivers_license: DataTypes.STRING,
    dob: DataTypes.DATE,
    issue_date: DataTypes.DATE,
    expiration_date: DataTypes.DATE,
    sex: DataTypes.STRING(1),
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING
  });

  return Customer;
};
