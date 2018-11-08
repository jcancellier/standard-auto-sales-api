'use strict';

module.exports = (sequelize, DataTypes) => {
  var Maker = sequelize.define('maker', {
    // TODO: ask if code is auto-incremented
    code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    make: {
        type: DataTypes.STRING,
        unique: 'MakeAndModel'
    },
    model: {
        type: DataTypes.STRING,
        unique: 'MakeAndModel'
    }
  });

  Maker.associate = function(models) {
      Maker.hasMany(models.vehicle, {
          foreignKey: 'maker_code'
      })
  }

  return Maker;
};