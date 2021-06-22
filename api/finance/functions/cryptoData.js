const fs = require('fs')
const schedule = require('node-schedule')
const bitvavoSecret = require('./.bitvavoSecret.json')
const bitvavo = require('bitvavo')().options({
    APIKEY: bitvavoSecret["BITVAVO_APIKEY"],
    APISECRET: bitvavoSecret["BITVAVO_APISECRET"]
})


const getCryptoData = () => {
    return JSON.parse(fs.readFileSync('./assetData.json'))
}

const refreshCryptoData = async () => {
    const assetData = JSON.parse(fs.readFileSync('./assetData.json'))

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

    const strAssetData = JSON.stringify(assetData, null, 4);
    fs.writeFileSync('./api/assetData.json', strAssetData)
}

// run daily
schedule.scheduleJob('0 0 * * *', refreshCryptoData)

const cryptoAPI = (req, res) => {
    res.json(getCryptoData())
}

module.exports = cryptoAPI
