'use strict';

module.exports = (sequelize, DataTypes) => {
  var Vehicle = sequelize.define('vehicle', {
    maker_code: {type: DataTypes.INTEGER, allowNull:false} ,
    year: {type: DataTypes.INTEGER, allowNull:false},
    color: {type: DataTypes.STRING, allowNull:false},
    vin: {type:DataTypes.STRING(17), allowNull:false, unique:true},
    // TODO: ask kuljit about float(2)
    invoice_price: {type:DataTypes.INTEGER, allowNull:false},
    odo_reading: {type: DataTypes.INTEGER, allowNull:false},
    date_received: {type: DataTypes.DATEONLY, allowNull:false}
  });

  Vehicle.associate = function (models) {
    Vehicle.belongsTo(models.maker, {
      foreignKey: 'maker_code'
    })
    Vehicle.hasMany(models.sale, {
      foreignKey: 'vehicle_id'
    })
    Vehicle.hasMany(models.testdrive, {
      foreignKey: 'vehicle_id'
    })
  }

  return Vehicle;
};
