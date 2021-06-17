const jwt = require('jsonwebtoken')

const verifyAccessToken = (secret, token) => {
    return jwt.verify(token, secret)
}

module.exports = verifyAccessToken
