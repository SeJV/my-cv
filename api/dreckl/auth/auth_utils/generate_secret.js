const fs = require('fs')
const crypto = require('crypto')

const tokenSecret = crypto.randomBytes(64).toString('hex')
const stringToStore = 'TOKEN_SECRET=' + tokenSecret
fs.writeFileSync('.env', stringToStore)

console.log('Secret created/renewed')
