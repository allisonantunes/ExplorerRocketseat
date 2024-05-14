const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  usuarios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }]
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;