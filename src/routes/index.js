const { Router } = require('express')

const usersRouters = require('./users.routes')
const productsRouters = require('./products.routes')
const tagsRouters = require('./tags.routes')
const sessionsRouters = require('./sessions.routes')
const allProductsRouters = require('./allProducts.routes')


const routes = Router()

// Server find route 'users' here 
routes.use('/users', usersRouters)
routes.use('/sessions', sessionsRouters)
routes.use('/products', productsRouters)
routes.use('/tags', tagsRouters)

routes.use('/allproducts', allProductsRouters)

module.exports = routes