'use strict';

module.exports = (sequelize, DataTypes) => {
  var Visit = sequelize.define('visit', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    customer_id: DataTypes.INTEGER,
    salesperson_id: DataTypes.INTEGER,
    date: DataTypes.DATEONLY
  });

  Visit.associate = function (models) {
    Visit.hasMany(models.testdrive, {
      foreignKey: 'visit_id'
    })
  }

  return Visit;
};
