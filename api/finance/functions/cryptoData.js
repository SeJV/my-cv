const fs = require('fs')
const bitvavoSecret = require('./.bitvavoSecret.json')
let assetData = require('./assetData.json')
const bitvavo = require('bitvavo')().options({
    APIKEY: bitvavoSecret["BITVAVO_APIKEY"],
    APISECRET: bitvavoSecret["BITVAVO_APISECRET"]
})

const second = 1000; const minute = 60 * second; const hour = 60 * minute; const thirdDay = 8 * hour

const getNewCryptoData = async () => {
    const date = new Date()
    const dt = date.getTime()

    if (dt > assetData.expires) {
        // Refresh Stock Data values
        assetData.expires = dt + thirdDay

        const cryptos = await bitvavo.balance()
        let addedNano = false
        const nanoAvailable = 55.0
        for (const crypto of cryptos) {
            if(crypto.symbol !== 'EUR'){
                const market = crypto.symbol + '-EUR'
                if(crypto.symbol === "NANO") {
                    crypto["available"] = nanoAvailable
                    addedNano = true
                }
                try {
                    const res = await bitvavo.tickerPrice({'market': market})
                    crypto["price"] = res.price
                } catch (e) {
                    console.log(e)
                }
            }
        }
        if (!addedNano) {
            let nano = {
                "symbol": "NANO",
                "available": nanoAvailable,
                "inOrder": 0,
                "price": 0
            }
            const res = await bitvavo.tickerPrice({'market': "NANO-EUR"})
            nano["price"] = res.price

            cryptos.append(nano)
        }

        assetData["info"] = cryptos
    }


    const strAssetData = JSON.stringify(assetData, null, 4);
    fs.writeFileSync('./api/assetData.json', strAssetData)

    return assetData
}

const cryptoAPI = (req, res) => {
    getNewCryptoData().then(stockData => {
        res.json(stockData)
    })
}

module.exports = cryptoAPI
