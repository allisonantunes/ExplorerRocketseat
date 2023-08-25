const { Router } = require('express')
const UsersController = require('../controllers/UsersController')
const usersRoutes = Router()
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

/* function myMiddleware(request, response, next) {
    console.log('passo no middleware');

    if(!request.body.isAdmin){
        return response.json({message: "user unauthorized"});
    }

    next()
} */

const userController = new UsersController()

usersRoutes.post('/', userController.create)
usersRoutes.put('/', ensureAuthenticated, userController.update)


module.exports = usersRoutes