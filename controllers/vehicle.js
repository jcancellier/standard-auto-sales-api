const Vehicle = require('../models').vehicle;
const Maker = require('../models').maker;

findAll = (req, res) => {
    const { count = 100 } = req.query;
    return (
        Vehicle.findAll({
            include: [{
                all: true,
                // model: Maker,
                // attributes: ['make', 'model']
            }],
            limit: count
        })
            .then((vehicles) => {res.status(200).send(vehicles)})
            .catch((err) => res.status(400).send(err))
    );
}

findById = (req, res) => {
    const { id } = req.params;
    return (
        Vehicle.findById(id, {
            include: [{
                all: true
            }]
        })
            .then(vehicle => {
                if(!vehicle) {
                    return res.status(404).send({
                        message: 'Vehicle Not Found',
                      });
                }
                return res.status(200).send(vehicle);
            })
    );
}

module.exports = {
    findAll,
    findById
}
