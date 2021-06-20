const db = require('../db/dreckl')
const abwesenheitDB = db.abwesenheit

const deleteAbwesenheit = (req, res) => {
    abwesenheitDB.update(null, null, null, null, () => {
        res.send('Reset "abwesenheit".')
    })
}

module.exports = deleteAbwesenheit
