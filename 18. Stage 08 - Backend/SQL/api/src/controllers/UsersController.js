/* 
    Um controller tem no max 5 metodos (função)
    - index - GET para listar varios registros
    - show - GET para exibir um regisro
    - create - POST para criar um registro
    - update - PUT para atualizar um registro
    - delete - DELETE para remover um registro
*/
const AppError = require('../utils/AppError')
const sqliteConnection = require('../database/sqlite')
const {hash, compare} = require('bcryptjs')

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body

        const database = await sqliteConnection()

        const checkUserExists = await database.get(' SELECT * FROM users WHERE email = (?)', [email])
    
        if(checkUserExists){
            throw new AppError('Este e-mail já está em uso')
        }
        
        const hashedPassword = await hash(password, 8)

        await database.run('INSERT INTO users (name, email, password) VALUES (?,?,?)',
        [name, email, hashedPassword])
        
        return response.status(201).json()
    }

    async update(request, response) {
        const {name, email, password, old_password} = request.body
        const user_id = request.user.id

        const database = await sqliteConnection()
        const user = await database.get(`SELECT * FROM users WHERE id = ${user_id}`)
        
        if(!user) {
            throw new AppError('Usuario nao encontrado')
        }

        const updatedEmailUser = await database.get(' SELECT * FROM users WHERE email = (?)', [email])
        
        if(updatedEmailUser && updatedEmailUser.id !== user.id) {
            throw new AppError('E-mail já está em uso.')
        }

        user.name = name ?? user.name
        user.email = email ?? user.email

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

        await database.run(`
        UPDATE users SET
        name = ${user.name},
        email = ${user.email},
        password = ${user.password},
        updated_at = DATETIME('now)
        WHERE id = ${user_id}
        `,)
       // [user.name, user.email, user.password, user_id])

        return response.json()
    }   
}

module.exports = UsersController
