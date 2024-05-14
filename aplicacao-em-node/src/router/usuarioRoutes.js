const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

router.post('/usuarios', async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).send(usuario);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
