const jwt = require('jsonwebtoken')

const generateAccessToken = (secret) => {
    const jwtOptions = {
        expiresIn: "7d"
    }
    return jwt.sign({user: 'admin'}, secret, jwtOptions)
}

module.exports = generateAccessToken

