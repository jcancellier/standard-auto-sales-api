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
      .then((customers) => { res.status(200).send(customers) })
      .catch((err) => res.status(400).send(err))
  );
}

module.exports = {
  findAll
}
