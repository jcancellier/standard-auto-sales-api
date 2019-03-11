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

findAll = (req, res) => {
  const { salesperson_id } = req.query;
  let query;

  if(salesperson_id) {
    query = {
      where: {
        salesperson_id: salesperson_id
      }
    };
  } else {
    query = {};
  }

  Sale.findAll({
    query
  })
    .then((sales) => res.status(200).send(sales))
    .catch((err) => res.status(400).send(err));
}

module.exports = {
  add,
  findAll
}
