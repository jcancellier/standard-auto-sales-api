'use strict';

module.exports = (sequelize, DataTypes) => {
  var Vehicle = sequelize.define('vehicle', {
    maker_code: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    color: DataTypes.STRING,
    vin: DataTypes.STRING(17),
    // TODO: ask kuljit about float(2)
    invoice_price: DataTypes.INTEGER,
    odo_reading: DataTypes.INTEGER,
    date_received: DataTypes.DATEONLY
  });

  Vehicle.associate = function (models) {
    Vehicle.belongsTo(models.maker, {
      foreignKey: 'maker_code'
    })
    Vehicle.hasMany(models.sale, {
      foreignKey: 'vehicle_id'
    })
  }

  return Vehicle;
};
