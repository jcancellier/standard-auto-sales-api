'use strict';

module.exports = (sequelize, DataTypes) => {
  var Testdrive = sequelize.define('testdrive', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },
    vehicle_id: {type: DataTypes.INTEGER, allowNull: false},
    visit_id: {type: DataTypes.INTEGER, allowNull:false}
  });

  return Testdrive;
};
