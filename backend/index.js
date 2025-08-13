const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const checkoutRoute = require('./routes/checkout');
const casesRoute = require('./routes/cases');
const blogRoute = require('./routes/blog');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', checkoutRoute);
app.use('/api', casesRoute);
app.use('/api', blogRoute);

// Servir arquivos estáticos do build do frontend
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Rota curinga para suportar SPA
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

