const { Router } = require('express')


const ProductsController = require('../controllers/ProductController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const productsRouters = Router()

const productsController = new ProductsController()


productsRouters.use(ensureAuthenticated)

productsRouters.post('/', productsController.create)
productsRouters.get('/:id', productsController.show )
productsRouters.delete('/:id', productsController.delete)
productsRouters.get('/', productsController.index)


module.exports = productsRouters