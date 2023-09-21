const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const {hash, compare} = require('bcryptjs')

const sqliteConnection = require('../database/sqlite')
const UserRepository = require('../repositories/UserRepository')
const UserCreateServices = require('../services/UserCreateServices')

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body

        const userRepository = new UserRepository()
        const userCreateServices = new UserCreateServices(userRepository)
        await userCreateServices.execute({name, email, password})

        return response.status(201).json()
    }

    async update(request, response) {
        const {name, email, password, old_password} = request.body
        const user_id = request.user.id

        const database = await sqliteConnection()
        // const user = await database.get(`SELECT * FROM users WHERE id = ${user_id}`)
        const user = await knex('users').where({ id: user_id }).first()

        if(!user) {
            throw new AppError('Usuario nao encontrado')
        }

        // const updatedEmailUser = await database.get(` SELECT * FROM users WHERE email = ${email}`)
        const updatedEmailUser = await knex('users').where({ email }).first()
        if(updatedEmailUser && updatedEmailUser.id !== user.id) {
            throw new AppError('E-mail já está em uso.')
        }

        if(password && !old_password) {
            throw new AppError('Vc precisa informar a senha antiga para definir a nova senha')
        }

        if(password && old_password) {
            const checkOldPassword = await compare(old_password, user.password)

            if(!checkOldPassword) {
                throw new AppError('A senha antiga não confere')
            }

            user.password = await hash(password, 8)
        }
        user.name = name ?? user.name
        user.email = email ?? user.email

/*
        await database.run(`
        UPDATE users SET
        name = ?,
        email = ?,
        password = ?,
        updated_at = DATETIME('now'),
        WHERE id = ?`,
        [user.name, user.email, user.password, user_id])
*/
        await knex('users')
        .update({
        name: user.name,
        email: user.email,
        password: user.password,
        updated_at: knex.fn.now()
      })
      .where({ id: user_id })

        return response.json()
    }   
}

module.exports = UsersController
