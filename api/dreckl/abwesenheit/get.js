const fs = require('fs')

const getAbwesenheit = (req, res) => {
    const jsonString = fs.readFileSync(req.abwesenheitPath)
    const abwesenheit = JSON.parse(jsonString)

    res.json(abwesenheit)
}

module.exports = getAbwesenheit
