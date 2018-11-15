'use strict';

module.exports = (sequelize, DataTypes) => {
  var Visit = sequelize.define('visit', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },
    date: DataTypes.DATEONLY
  });

  Visit.associate = function (models) {
    Visit.belongsToMany(models.vehicle, {
      through: 'testdrive',
      foreignKey: 'visit_id'
    })
  }

  return Visit;
};
