const Vehicle = require('../models').vehicle;
const Maker = require('../models').maker;

findAll = (req, res) => {
    const { count = 10 } = req.query;
    return (
        Vehicle.findAll({
            include: [{
                model: Maker,
                attributes: ['make', 'model']
            }],
            limit: count
        })
            .then((vehicles) => res.status(200).send(vehicles))
            .catch((err) => res.status(400).send(err))
    );
}

findById = (req, res) => {
    return (
        Vehicle.findById(req.params.id, {
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

