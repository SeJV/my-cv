const checkPin = require('./auth_utils/check_pin')

const getAuth = (req, res) => {
    // 1. check PIN
    const pin = req.query.pin
    checkPin(req, res, pin)
}

module.exports = getAuth