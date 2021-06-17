const generateAccessToken = require('./auth_utils/generate_token')

const postAuth = (req, res) => {
    // 1. check PIN
    const pin = req.body && req.body.pin
    let token = null
    const validPin = 'e7ad40523cbc7d3c04d2873e7af0d6aac50631b203b1a8c792a61511d0fee738'  // sha256(7412).hex
    console.log(pin)
    if (pin === validPin) {
        // 2. generate jwt
        token = generateAccessToken(req.tokenSecret)
        res.cookie('drecklJWT', token, {maxAge: 1000 * 60 * 60 * 24 * 7})
        res.send('Cookie successfully set')
    } else {
        res.status(401).send('Pin was wrong')
    }
}

module.exports = postAuth