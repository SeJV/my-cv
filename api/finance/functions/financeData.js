const fs = require('fs')
const fetch = require('node-fetch')
let stockData = require('./stockData.json')
const amountHistory = require('./amountHistory.json')

const eodAPIToken = '605889baa43966.04390979'

const getStockPath = (stockTicker) => {
    return `https://eodhistoricaldata.com/api/eod/${stockTicker}?api_token=${eodAPIToken}&fmt=json`
}

const getNewStockData = async () => {
    const second = 1000; const minute = 60 * second; const hour = 60 * minute; const thirdDay = 8 * hour

    const date = new Date()
    const dt = date.getTime()

    if (dt > stockData.expires) {
        // Refresh Stock Data values
        stockData.expires = dt + thirdDay

        // fetch newest stock data
        for (const stock of stockData.stocks) {
            const stockPath = getStockPath(stock.ticker)
            const res = await fetch(stockPath)
            stock.valueHistory = await res.json()
        }
    }

    const strStockData = JSON.stringify(stockData, null, 4);
    fs.writeFileSync('./api/stockData.json', strStockData)

    // append amount history to each stock
    stockData.stocks.forEach(stock => {
        stock['amountHistory'] = amountHistory[stock.ticker]
    })

    return stockData
}


const financeAPI = (req, res) => {
    getNewStockData().then(stockData => {
        res.json(stockData)
    })
}

module.exports = financeAPI

