const generateAccessToken = require('./generate_token')

const checkPin = (req, res, pin) => {
    const validPin = 'e7ad40523cbc7d3c04d2873e7af0d6aac50631b203b1a8c792a61511d0fee738'  // sha256(7412).hex
    if (pin === validPin) {
        // 2. generate jwt
        const token = generateAccessToken(req.tokenSecret)
        res.cookie('drecklJWT', token, {maxAge: 1000 * 60 * 60 * 24 * 7})
        res.send('Cookie successfully set')
    } else {
        res.status(401).send('Pin was wrong: ' + pin)
    }
}

module.exports = checkPin
