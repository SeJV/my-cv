const fs = require('fs')

const putAbwesenheit = (req, res) => {
    const updateAbwesenheit = req.body

    const jsonString = fs.readFileSync(req.abwesenheitPath)
    const abwesenheit = JSON.parse(jsonString)

    for (const key in abwesenheit) {
        if (key in updateAbwesenheit) {
            abwesenheit[key] = updateAbwesenheit[key]
        } else {
            res.status(500).send('Missing keys in body. Looking for: ' + key)
            return
        }
    }

    fs.writeFileSync(req.abwesenheitPath, JSON.stringify(abwesenheit, null, 4))
    res.json(updateAbwesenheit)
    //res.json(abwesenheit)
}

module.exports = putAbwesenheit
