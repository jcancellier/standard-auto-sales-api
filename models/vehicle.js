'use strict';

module.exports = (sequelize, DataTypes) => {
  var Vehicle = sequelize.define('vehicle', {
    maker_code: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    color: DataTypes.STRING,
    vin: DataTypes.STRING(17),
    // TODO: ask kuljit about float(2)
    invoice_price: DataTypes.FLOAT(2),
    odo_reading: DataTypes.INTEGER,
    date_received: DataTypes.DATE
  });

  return Vehicle;
};
