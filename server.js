const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true, // personal modification
});

requireDir('./src/models'); // after the connection, catch the (xProductx) models

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3333);
