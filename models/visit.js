'use strict';

module.exports = (sequelize, DataTypes) => {
  var Visit = sequelize.define('visit', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    customer_id: {type: DataTypes.INTEGER, allowNull: false},
    salesperson_id: {type: DataTypes.INTEGER, allowNull: false},
    date: {type: DataTypes.DATEONLY, allowNull:false}
  });

  Visit.associate = function (models) {
    Visit.hasMany(models.testdrive, {
      foreignKey: 'visit_id'
    })
  }

  return Visit;
};
