var fs = require('fs');
var maker = fs.readFileSync(__dirname + '/mockData/maker.sql').toString();
var vehicle = fs.readFileSync(__dirname + '/mockData/vehicle.sql').toString();

var sql = maker + vehicle;

module.exports = sql;