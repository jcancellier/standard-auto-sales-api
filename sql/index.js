var fs = require('fs');
var sql = fs.readFileSync(__dirname + '/mockData/maker.sql').toString();
module.exports = sql;