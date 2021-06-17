const verifyAccessToken = require('./auth_utils/verify_token')


const auth = (req, res, next) => {
    const drecklJWT = req.cookies && req.cookies.drecklJWT

    // 1. check jwt
    if (drecklJWT) {
        try {
            const payload = verifyAccessToken(req.tokenSecret, drecklJWT)
            if (payload.user === 'admin') {
                next()
                return
            }
        } catch (e) {
            console.log(e.message)
        }
    }
    res.status(401).send('JWT is invalid')
}

module.exports = auth
