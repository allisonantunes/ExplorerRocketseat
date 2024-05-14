const mongoose = require('mongoose');

const filmeSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  nota: { type: Number, required: true },
  tags: [{ type: String }],
  usuarios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }]
});

const Filme = mongoose.model('Filme', filmeSchema);

module.exports = Filme;