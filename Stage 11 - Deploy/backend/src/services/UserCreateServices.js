const AppError = require('../utils/AppError')
const {hash} = require('bcryptjs')

class UserCreateServices {
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async execute ({name, email, password}) {

        const checkUserExists = await this.userRepository.findByEmail(email)

        if(checkUserExists){
            throw new AppError('Este e-mail já está em uso')
        }
        
        const hashedPassword = await hash(password, 8)

        const userCreate = await this.userRepository.create({name, email, password: hashedPassword})
        
        return userCreate
    }
}

module.exports = UserCreateServices