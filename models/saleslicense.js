'use strict';

module.exports = (sequelize, DataTypes) => {
  var SalesLicense = sequelize.define('saleslicense', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    state_of_issue: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    issue_date: {
      type: DataTypes.DATEONLY,
      primaryKey: true
    },
    expiration_date: DataTypes.DATEONLY,
  });


  // SalesLicense.associate = function (models) {
  //   SalesLicense.hasOne(models.salesperson, {
  //     foreignKey: 'saleslicense_id',
  //     sourceKey: 'id'
  //   })
  // }

  return SalesLicense;
};
