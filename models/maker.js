'use strict';

module.exports = (sequelize, DataTypes) => {
  var Maker = sequelize.define('maker', {
    code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    make: {
        type: DataTypes.STRING,
        unique: 'MakeAndModel',
        allowNull:false
    },
    model: {
        type: DataTypes.STRING,
        unique: 'MakeAndModel',
        allowNull:false
    },
    image: {
        type: DataTypes.STRING
    }
  });

  Maker.associate = function(models) {
      Maker.hasMany(models.vehicle, {
          foreignKey: 'maker_code'
      })
  }

  return Maker;
};