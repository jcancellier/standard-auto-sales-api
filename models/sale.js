'use strict';

module.exports = (sequelize, DataTypes) => {
  var Sale = sequelize.define('sale', {
    customer_id: {type: DataTypes.INTEGER, allowNull: false},
    salesperson_id: {type: DataTypes.INTEGER, allowNull: false},
    vehicle_id: {type: DataTypes.INTEGER, allowNull: false},
    date: { type: DataTypes.DATEONLY, allowNull: false},
    sale_price: {type: DataTypes.FLOAT(2), allowNull: false},
    odo_reading: { type: DataTypes.INTEGER, allowNull: false}
  });

  return Sale;
};
