const fs = require('fs')
const fetch = require('node-fetch')
const schedule = require('node-schedule')
const amountHistory = require('./amountHistory.json')

const eodAPIToken = '605889baa43966.04390979'

const getStockPath = (stockTicker) => {
    return `https://eodhistoricaldata.com/api/eod/${stockTicker}?api_token=${eodAPIToken}&fmt=json`
}

const getStockData = () => {
    const stockData = JSON.parse(fs.readFileSync('./stockData.json'))

    // append amount history to each stock
    stockData.stocks.forEach(stock => {
        stock['amountHistory'] = amountHistory[stock.ticker]
    })

    return stockData
}

const refreshStockData = async () => {
    const stockData = JSON.parse(fs.readFileSync('./stockData.json'))

    // fetch newest stock data
    for (const stock of stockData.stocks) {
        const stockPath = getStockPath(stock.ticker)
        const res = await fetch(stockPath)
        stock.valueHistory = await res.json()
    }

    const strStockData = JSON.stringify(stockData, null, 4)
    fs.writeFileSync('./api/stockData.json', strStockData)
}

// run daily
schedule.scheduleJob('0 0 * * *', refreshStockData)


const financeAPI = (req, res) => {
    res.json(getStockData())
}

module.exports = financeAPI

