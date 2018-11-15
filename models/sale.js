'use strict';

module.exports = (sequelize, DataTypes) => {
  var Sale = sequelize.define('sale', {
    customer_id: DataTypes.INTEGER,
    salesperson_id: DataTypes.INTEGER,
    vehicle_id: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    sale_price: DataTypes.FLOAT(2),
    odo_reading: DataTypes.INTEGER
  });

  return Sale;
};
