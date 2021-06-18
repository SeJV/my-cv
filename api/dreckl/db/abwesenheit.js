const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./abwesenheit.db')

// initialize database
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS abwesenheit" +
                "(id INT, title TEXT, description TEXT, starting DATE, ending DATE, PRIMARY KEY(id))")
    // insert empty abwesenheits entry, if none exists
    db.run("INSERT INTO abwesenheit (id, title, description, starting, ending) " +
                "SELECT 1, NULL, NULL, NULL, NULL " +
                    "WHERE NOT EXISTS (SELECT * FROM abwesenheit WHERE id = 1)")
})

const read = (callback) => {
    db.each("SELECT * FROM abwesenheit", (err, row) => {
        callback(row)
    })
}

const update = (title, description, starting, ending, callback) => {
    db.run("UPDATE abwesenheit SET title = $title, description = $description, starting = $starting, ending = $ending", {
        $title: title,
        $description: description,
        $starting: starting,
        $ending: ending
    }, () => callback())
}

module.exports = {
    "read": read,
    "update": update
}
