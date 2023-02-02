const validateTeam = require('./middleware/validateTeam');
const existingId = require('./middleware/existingId');

const existingId = (req, res, next) => {
    const id = Number(req.params.id);
    if (!teams.some((t) => t.id === id)) {
      return res.sendStatus(404).json({ message: 'Time não encontrado' });
    
    next();
  } else {
    // se não existe, então vamos retornar o status HTTP 404
    res.sendStatus(404);
  }
};
//...
// a ordem é significativa, embora neste caso faça pouca diferença
app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  // não precisamos mais conferir, com certeza o team existe
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

// não precisa do sufixo .js, o node sabe deduzir
