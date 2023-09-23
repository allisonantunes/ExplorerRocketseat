const { Router } = require('express')
const NotesController = require('../controllers/NotesController')
const notesRoutes = Router()
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated) // aplicando para todas as rotas.

notesRoutes.get('/', notesController.index)
notesRoutes.post('/', notesController.create)
notesRoutes.get('/', notesController.show)
notesRoutes.delete('/', notesController.delete)


module.exports = notesRoutes