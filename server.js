const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors()); // Permitir CORS para todas las rutas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let results = {
    form1: {},
    form2: {},
    form3: {},
    form4: {},
    form5: {},
    form6: {},
    form7: {},
    form8: {},
    form9: {},
    form10: {},
    form11: {},
    form12: {},
    form13: {},
    form14: {},
    form15: {},
    form16: {},
    form17: {},
    form18: {},
    form19: {},
    form20: {},
    form21: {},
    form22: {},
    form23: {},
    form24: {},
    form25: {},
    form26: {},
    form27: {},
    form28: {},
    form29: {},
    form30: {},
};

// Endpoint para recibir los resultados del formulario 1 (POST)
app.post('/submit/form1', (req, res) => {
    results.form1 = req.body;
    res.send('Valores de la estación 1.1 recibido');
});

// Endpoint para recibir los resultados del formulario 2 (POST)
app.post('/submit/form2', (req, res) => {
    results.form2 = req.body;
    res.send('Valores de la estación 1.2 recibido');
});

// Endpoint para recibir los resultados del formulario 3 (POST)
app.post('/submit/form3', (req, res) => {
    results.form3 = req.body;
    res.send('Valores de la estación 2.1 recibido');
});

// Endpoint para recibir los resultados del formulario 4 (POST)
app.post('/submit/form4', (req, res) => {
    results.form4 = req.body;
    res.send('Valores de la estación 2.2 recibido');
});

// Endpoint para recibir los resultados del formulario 5 (POST)
app.post('/submit/form5', (req, res) => {
    results.form5 = req.body;
    res.send('Valores de la estación 3.1 recibido');
});

// Endpoint para recibir los resultados del formulario 6 (POST)
app.post('/submit/form6', (req, res) => {
    results.form6 = req.body;
    res.send('Valores de la estación 3.2 recibido');
});

// Endpoint para recibir los resultados del formulario 7 (POST)
app.post('/submit/form7', (req, res) => {
    results.form7 = req.body;
    res.send('Valores de la estación 4.1 recibido');
});

// Endpoint para recibir los resultados del formulario 8 (POST)
app.post('/submit/form8', (req, res) => {
    results.form8 = req.body;
    res.send('Valores de la estación 4.2 recibido');
});

// Endpoint para recibir los resultados del formulario 9 (POST)
app.post('/submit/form9', (req, res) => {
    results.form9 = req.body;
    res.send('Valores de la estación 5.1 recibido');
});

// Endpoint para recibir los resultados del formulario 10 (POST)
app.post('/submit/form10', (req, res) => {
    results.form10 = req.body;
    res.send('Valores de la estación 5.2 recibido');
});

// Endpoint para recibir los resultados del formulario 11 (POST)
app.post('/submit/form11', (req, res) => {
    results.form11 = req.body;
    res.send('Valores de la estación 6.1 recibido');
});

// Endpoint para recibir los resultados del formulario 12 (POST)
app.post('/submit/form12', (req, res) => {
    results.form12 = req.body;
    res.send('Valores de la estación 6.2 recibido');
});

// Endpoint para recibir los resultados del formulario 13 (POST)
app.post('/submit/form13', (req, res) => {
    results.form13 = req.body;
    res.send('Valores de la estación 7.1 recibido');
});

// Endpoint para recibir los resultados del formulario 14 (POST)
app.post('/submit/form14', (req, res) => {
    results.form14 = req.body;
    res.send('Valores de la estación 7.2 recibido');
});

// Endpoint para recibir los resultados del formulario 15 (POST)
app.post('/submit/form15', (req, res) => {
    results.form15 = req.body;
    res.send('Valores de la estación 8.1 recibido');
});

// Endpoint para recibir los resultados del formulario 16 (POST)
app.post('/submit/form16', (req, res) => {
    results.form16 = req.body;
    res.send('Valores de la estación 8.2 recibido');
});

// Endpoint para recibir los resultados del formulario 17 (POST)
app.post('/submit/form17', (req, res) => {
    results.form17 = req.body;
    res.send('Valores de la estación 9.1 recibido');
});

// Endpoint para recibir los resultados del formulario 18 (POST)
app.post('/submit/form18', (req, res) => {
    results.form18 = req.body;
    res.send('Valores de la estación 9.2 recibido');
});

// Endpoint para recibir los resultados del formulario 19 (POST)
app.post('/submit/form19', (req, res) => {
    results.form19 = req.body;
    res.send('Valores de la estación 10.1 recibido');
});

// Endpoint para recibir los resultados del formulario 20 (POST)
app.post('/submit/form20', (req, res) => {
    results.form20 = req.body;
    res.send('Valores de la estación 10.2 recibido');
});

// Endpoint para recibir los resultados del formulario 21 (POST)
app.post('/submit/form21', (req, res) => {
    results.form21 = req.body;
    res.send('Valores de la estación 11.1 recibido');
});

// Endpoint para recibir los resultados del formulario 22 (POST)
app.post('/submit/form22', (req, res) => {
    results.form22 = req.body;
    res.send('Valores de la estación 11.2 recibido');
});

// Endpoint para recibir los resultados del formulario 23 (POST)
app.post('/submit/form23', (req, res) => {
    results.form23 = req.body;
    res.send('Valores de la estación 11.3 recibido');
});

// Endpoint para recibir los resultados del formulario 24 (POST)
app.post('/submit/form24', (req, res) => {
    results.form24 = req.body;
    res.send('Valores de la estación 12.1 recibido');
});

// Endpoint para recibir los resultados del formulario 25 (POST)
app.post('/submit/form25', (req, res) => {
    results.form25 = req.body;
    res.send('Valores de la estación 13.1 recibido');
});

// Endpoint para recibir los resultados del formulario 26 (POST)
app.post('/submit/form26', (req, res) => {
    results.form26 = req.body;
    res.send('Valores de la estación 14.1 recibido');
});

// Endpoint para recibir los resultados del formulario 27 (POST)
app.post('/submit/form27', (req, res) => {
    results.form27 = req.body;
    res.send('Valores de la estación 15.1 recibido');
});

// Endpoint para recibir los resultados del formulario 28 (POST)
app.post('/submit/form28', (req, res) => {
    results.form28 = req.body;
    res.send('Valores de la estación 15.2 recibido');
});

// Endpoint para recibir los resultados del formulario 29 (POST)
app.post('/submit/form29', (req, res) => {
    results.form29 = req.body;
    res.send('Valores de la estación 16.1 recibido');
});

// Endpoint para recibir los resultados del formulario 30 (POST)
app.post('/submit/form30', (req, res) => {
    results.form30 = req.body;
    res.send('Valores de la estación 17.1 recibido');
});

// Endpoint para obtener los resultados (GET)
app.get('/results', (req, res) => {
    res.json(results);
});

// Servir archivos estáticos
app.use(express.static('public'));

// Servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
