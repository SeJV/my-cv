const express = require('express')

const getAbwesenheit = require('./abwesenheit/get')
const putAbwesenheit = require('./abwesenheit/put')
const postAbwesenheit = require('./abwesenheit/post')
const deleteAbwesenheit = require('./abwesenheit/delete')

const getCountUser = require('./countuser/get')
const postCountUser = require('./countuser/post')

const postAuth = require('./auth/post')
const putAuth = require('./auth/put')
const authMiddleware = require('./auth/middleware')

const path = require('path')
const appRoot = path.resolve(__dirname)

const drecklRouter = express.Router()

drecklRouter.use((req, res, next) => {
    req.abwesenheitPath = appRoot + '/db/abwesenheit.json'
    req.tokenSecret = 'e9b7cf9114c278d1fb569b271998c798047260d1a34c08b25e1c2f91f705ad9991bc92e630f1a702b782a093f58eb68d6dbffa5ae8e665e0aabf51ced6cc034c'

    if (req.query.drecklJWT) {
        req.cookies.drecklJWT = req.query.drecklJWT
    }

    next()
})

// Public Path
drecklRouter.route('/auth')
    .get(putAuth)
    .put(putAuth)
    .post(postAuth)

drecklRouter.route('/countuser/post')
    .get(postCountUser)
    .post(postCountUser)

drecklRouter.route('/abwesenheit/get')
    .get(getAbwesenheit)

// Admin Path
drecklRouter.use('/countuser/get', authMiddleware)
drecklRouter.route('/countuser/get')
    .get(getCountUser)

drecklRouter.use('/abwesenheit/put', authMiddleware)
drecklRouter.route('/abwesenheit/put')
    .get(putAbwesenheit)
    .put(putAbwesenheit)

drecklRouter.use('/abwesenheit/post', authMiddleware)
drecklRouter.route('/abwesenheit/post')
    .get(postAbwesenheit)
    .post(postAbwesenheit)

drecklRouter.use('/abwesenheit/delete', authMiddleware)
drecklRouter.route('/abwesenheit/delete')
    .get(deleteAbwesenheit)
    .delete(deleteAbwesenheit)


module.exports = drecklRouter
