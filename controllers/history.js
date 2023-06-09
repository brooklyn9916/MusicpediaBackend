const db = require('../models')
const History = db.history

// Create and Save a new History
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: 'Content can not be empty!'
        })
        return
    }

    // Create a History
    const history = {
        region: req.body.region,
        title: req.body.title,
        thumbnail: req.body.thumbnail,
        content: req.body.content
    }

    // Save History in the database
    History.create(history)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the History.'
            })
        })
}

// Retrieve all Histories from the database.
exports.findAll = (req, res) => {
    History.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving histories.'
            })
        })
}

// Find a single History with an id
exports.findOne = (req, res) => {
    const id = req.params.id

    History.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error retrieving History with id=' + id
            })
        })
}

// Update a History by the id in the request
exports.update = (req, res) => {
    const id = req.params.id

    History.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'History was updated successfully.'
                })
            } else {
                res.send({
                    message: `Cannot update History with id=${id}. Maybe History was not found or req.body is empty!`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error updating History with id=' + id
            })
        })
}

// Delete a History with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id

    History.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'History was deleted successfully!'
                })
            } else {
                res.send({
                    message: `Cannot delete History with id=${id}. Maybe History was not found!`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not delete History with id=' + id
            })
        })
}
