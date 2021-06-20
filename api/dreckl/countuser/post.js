const db = require('../db/dreckl')
const countuserDB = db.countuser


const postCountUser = (req, res) => {
    let rightNow = new Date().getTime()

    countuserDB.create(rightNow, () => {
        res.send('Timestamp stored')
    })
}

module.exports = postCountUser