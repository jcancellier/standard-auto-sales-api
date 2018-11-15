'use strict';

module.exports = (sequelize, DataTypes) => {
  var Visit = sequelize.define('visit', {
    date: DataTypes.DATEONLY
  });

  Visit.associate = function (models) {

  }

  return Visit;
};
