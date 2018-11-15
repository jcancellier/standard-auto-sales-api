'use strict';

module.exports = (sequelize, DataTypes) => {
  var Sale = sequelize.define('sale', {
    customer_id: DataTypes.INTEGER,
    salesperson_id: DataTypes.INTEGER,
    vehicle_id: DataTypes.INTEGER,
    date: { type: DataTypes.DATEONLY, allowNull: false},
    sale_price: {type: DataTypes.FLOAT(2), allowNull: false},
    odo_reading: { type: DataTypes.INTEGER, allowNull: false}
  });

  return Sale;
};
