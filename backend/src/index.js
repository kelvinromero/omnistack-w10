const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');
const cors = require('cors');
const app = express();



// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros
// Query params: request.query (Filtros, ordenação, paginação)
// Route params: request.params (Identificar um recurso na alteração ou remoção)
// Body params: request.body (Dados para criação ou alteração)


// MongoDB (Não-relacional)

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ey0ie.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333)