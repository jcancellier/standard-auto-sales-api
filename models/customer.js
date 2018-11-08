'use strict';

module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('customer', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    drivers_license: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    issue_date: DataTypes.DATEONLY,
    expiration_date: DataTypes.DATEONLY,
    sex: DataTypes.STRING(1),
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING
  });

  return Customer;
};
