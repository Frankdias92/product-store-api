const { hash, compare } = require('bcryptjs')
const AppError = require("../utils/AppError")


const UserRepository = require('../repositories/UserRepository')
const sqliteConnection = require('../database/sqlite')
const UserCreateService = require('../services/UserCreateService')


class UsersController {
    async create (req, res) {
        const { name, email, password } = req.body
        
        const userRepository = new UserRepository()
        const userCreateService = new UserCreateService(userRepository)
        await userCreateService.execute({ name, email, password })

        return res.status(201).json()
    }


    async updata(req, res) {
        const { name, email, password, old_password } = req.body
        const user_id = req.user.id

        const database = await sqliteConnection()
        const user = await database.get(
            'SELECT * FROM users WHERE id = (?)', [user_id]
        )

        if (!user) {
            throw new AppError('Usuário não encontrado')
        }
        
        // verificando se o user não vai atualizar por um email existente
        const userWithUpdatedEmail = await database.get(
            'SELECT * FROM users WHERE email = (?)', [email]
        )

        if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError('Este E-mail já está em uso.')
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if ( password && !old_password ) {
            throw new AppError('You need to enter the old password to set the new password')
        }

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password)

            if (!checkOldPassword) {
                throw new AppError('The old password does not match.')
            }

            user.password = await hash(password, 8)
        }

        await database.run(
        `
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = DATETIME('now')
            WHERE id = ?
        `,  
            [user.name, user.email, user.password, user_id]
        )

        return res.status(200).json()
    }
}


module.exports = UsersController