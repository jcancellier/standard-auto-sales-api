'use strict';

module.exports = (sequelize, DataTypes) => {
  var SalesLicense = sequelize.define('saleslicense', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    state_of_issue: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    issue_date: {
      type: DataTypes.DATEONLY,
      primaryKey: true,
      allowNull:false
    },
    expiration_date: {type: DataTypes.DATEONLY, allowNull: false},
  });


  // SalesLicense.associate = function (models) {
  //   SalesLicense.hasOne(models.salesperson, {
  //     foreignKey: 'saleslicense_id',
  //     sourceKey: 'id'
  //   })
  // }

  return SalesLicense;
};
