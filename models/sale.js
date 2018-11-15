'use strict';

module.exports = (sequelize, DataTypes) => {
  var Sale = sequelize.define('sale', {
    date: DataTypes.DATEONLY,
    sale_price: DataTypes.FLOAT(2),
    odo_reading: DataTypes.INTEGER
  });

  return Sale;
};
