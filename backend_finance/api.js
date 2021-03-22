const fetch = require('node-fetch');

const key = '605889baa43966.04390979'
const testKey = 'OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX'
const inp = `https://eodhistoricaldata.com/api/eod/AAPL.US?api_token=${testKey}&filter=last_close`
const testPath = 'https://eodhistoricaldata.com/api/eod/MCD.US?from=2017-01-05&to=2017-02-10&api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&fmt=json'


const getFinanceData = (req, res) => {
    fetch(testPath)
        .then(result => result.json())
        .then(result => res.json(result))
}

module.exports = getFinanceData