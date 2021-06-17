const express = require('express')
const financeData = require('./functions/financeData')
const cryptoData = require('./functions/cryptoData')

const financeRouter = express.Router()

financeRouter.get('/data', financeData)
financeRouter.get('/crypto', cryptoData)

module.exports = financeRouter
