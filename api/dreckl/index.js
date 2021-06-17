const express = require('express')

const getAbwesenheit = require('./abwesenheit/get')
const putAbwesenheit = require('./abwesenheit/put')
const postAbwesenheit = require('./abwesenheit/post')
const deleteAbwesenheit = require('./abwesenheit/delete')

const postAuth = require('./auth/post')
const putAuth = require('./auth/put')
const authMiddleware = require('./auth/middleware')

const path = require('path')
const appRoot = path.resolve(__dirname)

const drecklRouter = express.Router()

drecklRouter.route('/checkcheck')
    .get((req, res) => {
        res.send('Successfully connected')
    })


drecklRouter.use((req, res, next) => {
    req.abwesenheitPath = appRoot + '/db/abwesenheit.json'
    req.tokenSecret = 'e9b7cf9114c278d1fb569b271998c798047260d1a34c08b25e1c2f91f705ad9991bc92e630f1a702b782a093f58eb68d6dbffa5ae8e665e0aabf51ced6cc034c'
    next()
})

drecklRouter.route('/auth')
    .post(postAuth)
    .put(postAuth)
    .get(putAuth)

drecklRouter.use('/abwesenheit', authMiddleware)
drecklRouter.route('/abwesenheit')
    .get(getAbwesenheit)
    .put(putAbwesenheit)
    .post(postAbwesenheit)
    .delete(deleteAbwesenheit)

module.exports = drecklRouter