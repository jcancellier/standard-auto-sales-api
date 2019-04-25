const Customer = require('../models').customer;

findAll = (req, res) => {
  const { count = 100 } = req.query;
  return (
    Customer.findAll({
      include: [{
        all: true
      }],
      limit: count
    })
      .then((customers) => {res.status(200).send(customers)})
      .catch((err) => res.status(400).send(err))
  );
}

add = (req, res) => {

  const { 
    first_name,
    last_name,
    drivers_license,
    dob,
    issue_date,
    expiration_date,
    sex,
    street,
    city,
    state,
    zipcode
  } = req.body;

  return Customer
    .create({
      first_name,
      last_name,
      drivers_license,
      dob,
      issue_date,
      expiration_date,
      sex,
      street,
      city,
      state,
      zipcode
    })
    .then((customer) => res.status(201).send(customer))
    .catch((error) => res.status(400).send(error));
}

module.exports = {
  findAll,
  add
}
