const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('<h1>Olá Mundo! V1.0</h1><p>Pipeline CI/CD a funcionar!</p>');
});

app.listen(PORT, () => {
  console.log(`Servidor a rodar na porta ${PORT}`);
});