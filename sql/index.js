// Purpose: Exports a sql script containing INSERT commands for mock-data for all tables
var fs = require('fs');
var maker = fs.readFileSync(__dirname + '/mockData/maker.sql').toString();
var vehicle = fs.readFileSync(__dirname + '/mockData/vehicle.sql').toString();
var customer = fs.readFileSync(__dirname + '/mockData/customer.sql').toString();

var sql = maker + vehicle + customer;


module.exports = sql;