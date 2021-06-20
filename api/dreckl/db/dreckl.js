const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./dreckl.db')

// initialize database
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS abwesenheit" +
                "(id INT, title TEXT, description TEXT, starting DATE, ending DATE, PRIMARY KEY(id))")
    // insert empty abwesenheits entry, if none exists
    db.run("INSERT INTO abwesenheit (id, title, description, starting, ending) " +
                "SELECT 1, NULL, NULL, NULL, NULL " +
                    "WHERE NOT EXISTS (SELECT * FROM abwesenheit WHERE id = 1)")

    // countuser table to store user clicks with timestamps
    db.run("CREATE TABLE IF NOT EXISTS countuser (timestamp DATE)")
})

const abwesenheitRead = (callback) => {
    db.each("SELECT * FROM abwesenheit", (err, row) => {
        callback(row)
    })
}

const abwesenheitUpdate = (title, description, starting, ending, callback) => {
    db.run("UPDATE abwesenheit SET title = $title, description = $description, starting = $starting, ending = $ending", {
        $title: title,
        $description: description,
        $starting: starting,
        $ending: ending
    }, () => callback())
}

const countuserCreate = (timestamp, callback) => {
    db.run("INSERT INTO countuser (timestamp) VALUES ($timestamp)", {
        $timestamp: timestamp
    }, () => callback())
}

const countuserRead = (since, callback) => {
    db.all("SELECT * FROM countuser WHERE timestamp > $since", {
        $since: since
    }, (err, rows) => callback(rows))
}

module.exports = {
    "abwesenheit": {
        "read": abwesenheitRead,
        "update": abwesenheitUpdate
    },
    "countuser": {
        "create": countuserCreate,
        "read": countuserRead
    }
}
