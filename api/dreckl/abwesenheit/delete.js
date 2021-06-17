const fs = require('fs')

const deleteAbwesenheit = (req, res) => {
    const jsonString = fs.readFileSync(req.abwesenheitPath)
    const abwesenheit = JSON.parse(jsonString)

    for (const key in abwesenheit) {
        abwesenheit[key] = null
    }

    fs.writeFileSync(req.abwesenheitPath, JSON.stringify(abwesenheit, null, 4))
    res.json(abwesenheit)
}

module.exports = deleteAbwesenheit
