const db = require('../db/dreckl')
const countuserDB = db.countuser


const getCountUser = (req, res) => {
    // read time in js: new Date(time)
    const since = req.query.since || 0

    countuserDB.read(since, (result) => {
        res.json(result)
    })
}

module.exports = getCountUser
