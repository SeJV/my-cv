const db = require('../db/dreckl')
const abwesenheitDB = db.abwesenheit

const editAbwesenheit = (req, res, updateAbwesenheit) => {
    abwesenheitDB.update(updateAbwesenheit.title,
        updateAbwesenheit.description,
        updateAbwesenheit.from,
        updateAbwesenheit.until,
        () => {
            res.send('Updated "Abwesenheit".')
        })
}

module.exports = editAbwesenheit
