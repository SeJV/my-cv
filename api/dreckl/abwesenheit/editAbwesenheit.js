const abwesenheitDB = require('../db/abwesenheit')

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
