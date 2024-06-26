const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5500;

app.use(cors()); // Permitir CORS para todas las rutas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let results = {
    form1: {},
    form2: {}
};

// Endpoint para recibir los resultados del formulario 1 (POST)
app.post('/submit/form1', (req, res) => {
    results.form1 = req.body;
    res.send('Formulario 1 recibido');
});

// Endpoint para recibir los resultados del formulario 2 (POST)
app.post('/submit/form2', (req, res) => {
    results.form2 = req.body;
    res.send('Formulario 2 recibido');
});

// Endpoint para obtener los resultados (GET)
app.get('/results', (req, res) => {
    res.json(results);
});

// Servir archivos estáticos (opcional, si necesitas servir archivos HTML)
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
