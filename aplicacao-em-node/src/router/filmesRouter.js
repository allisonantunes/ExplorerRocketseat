const express = require('express');
const router = express.Router();
const Filme = require('../models/filme');

router.post('/filmes', async (req, res) => {
  try {
    const filme = new Filme(req.body);
    await filme.save();
    res.status(201).send(filme);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;