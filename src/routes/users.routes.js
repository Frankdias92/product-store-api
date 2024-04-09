const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../configs/upload')


const UsersController = require('../controllers/UsersController')
const UserAvatarController = require('../controllers/UserAvatarController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')


const usersRouters = Router()
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController()
const userAvatarController = new UserAvatarController()

usersRouters.post('/', usersController.create)
usersRouters.put('/', ensureAuthenticated, usersController.updata)
usersRouters.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update)


module.exports = usersRouters

