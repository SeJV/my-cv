const express = require('express')
const path = require('path')

const app = express()

app.route("apiForMe")
    .get((req, res) => res.send("Hello World"))

app.use(express.static(path.join(__dirname, 'build')))
app.route("*")
    .get((req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    })

app.listen(9000)
