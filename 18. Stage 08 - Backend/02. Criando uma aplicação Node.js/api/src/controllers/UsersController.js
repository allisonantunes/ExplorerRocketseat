/* 
    Um controller tem no max 5 metodos (função)
    - index - GET para listar varios registros
    - show - GET para exibir um regisro
    - create - POST para criar um registro
    - update - PUT para atualizar um registro
    - delete - DELETE para remover um registro
*/
class UsersController {
    create(request, response) {
        const { name, email, password } = request.body
    
    response.json({ name, email, password })
    }
}

module.exports = UsersController
