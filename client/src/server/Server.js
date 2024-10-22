const express = require('express');
const cors = require('cors');  // Importa o pacote CORS

const app = express();
const port = 7000;

// Habilita o CORS para todas as rotas
app.use(cors());
app.use(express.json());

let groups = [];

app.get('/api/groups', (req, res) => {
  res.json(groups);
});

app.post('/api/groups', (req, res) => {
  const newGroup = { id: groups.length + 1, ...req.body };
  groups.push(newGroup);
  res.status(201).json(newGroup);
});

app.put('/api/groups/:id', (req, res) => {
  const { id } = req.params;
  const index = groups.findIndex(group => group.id == id);
  if (index >= 0) {
    groups[index] = { id: parseInt(id), ...req.body };
    res.json(groups[index]);
  } else {
    res.status(404).send('Group not found');
  }
});

app.delete('/api/groups/:id', (req, res) => {
  const { id } = req.params;
  groups = groups.filter(group => group.id != id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
