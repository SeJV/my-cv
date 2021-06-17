const checkPin = require('./auth_utils/check_pin')

const postAuth = (req, res) => {
    // 1. check PIN
    const pin = req.body && req.body.pin
    checkPin(req, res, pin)
}

module.exports = postAuth