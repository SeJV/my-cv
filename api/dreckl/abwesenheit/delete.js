const abwesenheitDB = require('../db/abwesenheit')

const deleteAbwesenheit = (req, res) => {
    abwesenheitDB.update(null, null, null, null, () => {
        res.send('Reset "abwesenheit".')
    })
}

module.exports = deleteAbwesenheit
