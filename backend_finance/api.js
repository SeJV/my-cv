const fetch = require('node-fetch');


const testPath = 'eod/MCD.US?from=2017-01-05&to=2017-02-10&api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX'

const eodAPI = 'https://eodhistoricaldata.com/api/'
const route = 'eod/'
const exchange = 'F'  // for Frankfurt
const testExchange = 'US'
const key = '605889baa43966.04390979'
const testKey = 'OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX'
const additionalOptions = '&filter=last_close&fmt=json'

const getFinanceData = (req, res) => {
    const stock_data = require('./data/stock_data.json');

    if(Date.now() > stock_data.expires) {
        fetch(eodAPI + route + 'AAPL' + '.' + testExchange + '&api_token=' + testKey + additionalOptions)
            .then(result => result.json())
            .then(result => res.json(result))
    }
    res.json({'Test': 'test'})
}

module.exports = getFinanceData
