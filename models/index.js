'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelizeConfig = {
  ...config,
  operatorsAliases: false,
  define: {
    freezeTableName: true,
    timestamps: false
  },
  logging: false
}
let sequelize = new Sequelize('postgres://vkmeyuzj:ulD4QqkFoUW391BQhWgadX_skC6uP5yY@baasu.db.elephantsql.com:5432/vkmeyuzj', sequelizeConfig);
// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], sequelizeConfig);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, sequelizeConfig);
// }

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
