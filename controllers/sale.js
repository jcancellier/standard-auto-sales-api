// 'use strict'
const Sale = require('../models').sale;

add = (req, res) => {
  const { customer_id, salesperson_id, vehicle_id, date, sale_price, odo_reading } = req.body;
  return Sale
    .create({
      customer_id,
      salesperson_id,
      vehicle_id,
      date,
      sale_price,
      odo_reading
    })
    .then((sale) => res.status(201).send(sale))
    .catch((error) => res.status(400).send(error));
}

module.exports = {
  add
}
