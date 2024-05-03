const { Router } = require('express')
const AllProductsController = require('../controllers/AllProductsController')


const allProductsRouters = Router()
const allProductsController = new AllProductsController()

allProductsRouters.get('/', allProductsController.index)
allProductsRouters.get('/', allProductsController.category)
allProductsRouters.get('/:id', allProductsController.show)

module.exports = allProductsRouters