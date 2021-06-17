const editAbwesenheit = require('./editAbwesenheit')

const putAbwesenheit = (req, res) => {
    const updateAbwesenheit = {
        from: req.query.from,
        until: req.query.until,
        title: req.query.title,
        description: req.query.description
    }

    editAbwesenheit(req, res, updateAbwesenheit)
}

module.exports = putAbwesenheit
