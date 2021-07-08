const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')

const drecklRouter = require('./api/dreckl')
const financeRouter = require('./api/finance')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.use('/drecklapi', drecklRouter)
app.use('/financeapi', financeRouter)

app.route('/version')
    .get((req, res) => res.send('v0.3'))

app.use(express.static(path.join(__dirname, 'build')))
app.route('*')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    })

app.listen(9000)
