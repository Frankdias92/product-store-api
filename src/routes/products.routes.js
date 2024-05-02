const { Router } = require('express')
const uploadConfig = require('../configs/upload')

const ProductsController = require('../controllers/ProductController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const multer = require('multer')

const productsRouters = Router()
const upload = multer(uploadConfig.MULTER)

const productsController = new ProductsController()


productsRouters.use(ensureAuthenticated)

productsRouters.post('/', upload.single('productIMG'), productsController.create)
productsRouters.get('/:id', productsController.show )
productsRouters.delete('/:id', productsController.delete)
productsRouters.get('/', productsController.index)


module.exports = productsRouters