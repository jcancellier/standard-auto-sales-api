'use strict';

module.exports = (sequelize, DataTypes) => {
  var Visit = sequelize.define('visit', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },
    date: DataTypes.DATEONLY
  });

  Visit.associate = function (models) {

  }

  return Visit;
};
