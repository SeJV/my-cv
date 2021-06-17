const editAbwesenheit = require('./editAbwesenheit')

const postAbwesenheit = (req, res) => {
    const updateAbwesenheit = req.body

    editAbwesenheit(req, res, updateAbwesenheit)
}

module.exports = postAbwesenheit
