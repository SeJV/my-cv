const fetch = require('node-fetch');


const testPath = 'https://eodhistoricaldata.com/api/eod/AAPL.US?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&filter=last_close&fmt=json'




const eodAPI = 'https://eodhistoricaldata.com/api/'
const route = 'eod/'
const exchange = 'F'  // for Frankfurt
const testExchange = 'US'
const key = '605889baa43966.04390979'
const testKey = 'OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX'
const additionalOptions = '&filter=last_close&fmt=json'

const getFinanceData = (req, res) => {
    fetch(testPath)
        .then(result => result.json())
        .then(result => res.json(result))
}

module.exports = getFinanceData
