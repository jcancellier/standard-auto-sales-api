const Salesperson = require('../models').salesperson;

findAll = (req, res) => {
    const { count = 100 } = req.query;
    return (
        Salesperson.findAll({
            include: [{
                all: true
            }],
            limit: count
        })
            .then((salespersons) => { res.status(200).send(salespersons) })
            .catch((err) => res.status(400).send(err))
    );
}

findById = (req, res) => {
    const { id } = req.params;
    return (
        Salesperson.findById(id, {
            include: [{
                all: true
            }]
        })
            .then(salesperson => {
                if (!salesperson) {
                    return res.status(404).send({
                        message: 'Salesperson Not Found',
                    });
                }
                return res.status(200).send(salesperson);
            })
    );
}

module.exports = {
    findAll,
    findById
}
