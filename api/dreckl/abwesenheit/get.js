const abwesenheitDB = require('../db/abwesenheit')

const getAbwesenheit = (req, res) => {
    abwesenheitDB.read((abwesenheit) => {
        res.json(abwesenheit)
    })
}

module.exports = getAbwesenheit
