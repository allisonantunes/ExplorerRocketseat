const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  filmes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Filme' }]
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;