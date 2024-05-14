const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const filmeRoutes = require('./src/routes/filmeRoutes');
const usuarioRoutes = require('./src/routes/usuarioRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(filmeRoutes);
app.use(usuarioRoutes);

mongoose.connect('mongodb://localhost:27017/cadastro-de-filmes', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexão com MongoDB estabelecida.');
}).catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});
