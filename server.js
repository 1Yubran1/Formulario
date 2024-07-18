const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 5501;

// Configuración de multer para almacenar archivos de imágenes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)));

// Crea el directorio uploads si no existe
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

//Endpoint para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Manejo de los resultados
let results = {};
for (let i = 1; i <= 31; i++) {
    results[`form${i}`] = {};
}

// Generar endpoints de formulario dinámicamente
for (let i = 1; i <= 31; i++) {
    app.post(`/submit/form${i}`, (req, res) => {
        results[`form${i}`] = req.body;
        res.send(`Valores de la estación ${Math.ceil(i / 2)}.${i % 2 === 0 ? 2 : 1} recibido`);
    });
}

app.get('/results', (req, res) => {
    res.json(results);
});

// Cargar equipos desde teams.json
let teams = require('./teams.json');

// Función para obtener el siguiente ID
function getNextId(teams) {
    const ids = teams.teams.map(team => parseInt(team.id, 10));
    return ids.length ? Math.max(...ids) + 1 : 1; // Incrementa el ID más alto o empieza desde 1
}

app.get('/teams', (req, res) => {
    const sortedTeams = teams.teams.sort((a, b) => a.name.localeCompare(b.name));
    res.json({ teams: sortedTeams });
});

// Endpoint para crear un nuevo equipo
app.post('/teams', (req, res) => {
    const newTeam = { id: getNextId(teams).toString(), name: req.body.name };
    teams.teams.push(newTeam);
    fs.writeFileSync('./teams.json', JSON.stringify(teams, null, 2));
    res.status(201).json(newTeam);
});

// Endpoint para actualizar un equipo existente
app.put('/teams/:id', (req, res) => {
    const teamId = req.params.id;
    const teamIndex = teams.teams.findIndex(team => team.id === teamId);
    if (teamIndex !== -1) {
        teams.teams[teamIndex].name = req.body.name;
        fs.writeFileSync('./teams.json', JSON.stringify(teams, null, 2));
        res.json(teams.teams[teamIndex]);
    } else {
        res.status(404).json({ message: 'Equipo no encontrado' });
    }
});

// Endpoint para eliminar un equipo
app.delete('/teams/:id', (req, res) => {
    const teamId = req.params.id;
    teams.teams = teams.teams.filter(team => team.id !== teamId);
    fs.writeFileSync('./teams.json', JSON.stringify(teams, null, 2));
    res.status(204).end();
});

// Endpoint para crear una nueva estación
app.post('/createStation', upload.single('image'), (req, res) => {
    const newStation = {
        id: getNextId(teams).toString(),
        name: req.body.name,
        objective: req.body.objective,
        image: req.file ? req.file.filename : null
    };

    // Guardar la estación en un archivo JSON
    let stations = [];
    if (fs.existsSync('stations.json')) {
        stations = JSON.parse(fs.readFileSync('stations.json', 'utf8'));
    }
    stations.push(newStation);
    fs.writeFileSync('stations.json', JSON.stringify(stations, null, 2));

    res.status(201).json(newStation);
});

// Endpoint para eliminar todos los resultados
app.post('/delete-results', (req, res) => {
    results = {};
    for (let i = 1; i <= 31; i++) {
        results[`form${i}`] = {};
    }
    res.send('Datos eliminados correctamente');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
