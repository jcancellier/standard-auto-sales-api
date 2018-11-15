// Purpose: Exports a sql script containing INSERT commands for mock-data for all tables
let fs = require('fs');
let maker = fs.readFileSync(__dirname + '/mockData/maker.sql').toString();
let vehicle = fs.readFileSync(__dirname + '/mockData/vehicle.sql').toString();
let customer = fs.readFileSync(__dirname + '/mockData/customer.sql').toString();
let salesperson = fs.readFileSync(__dirname + '/mockData/salesperson.sql').toString();
let saleslicense = fs.readFileSync(__dirname + '/mockData/saleslicense.sql').toString();
let sale = fs.readFileSync(__dirname + '/mockData/sale.sql').toString();
let visit = fs.readFileSync(__dirname + '/mockData/visit.sql').toString();
let testdrive = fs.readFileSync(__dirname + '/mockData/testdrive.sql').toString();


let sql = 
    maker 
    + vehicle 
    + customer
    + salesperson
    + saleslicense
    + sale
    + visit
    + testdrive
    ;


module.exports = sql;