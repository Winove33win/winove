import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import blogPostsRoute from './routes/blogPosts.js';
import casesRoute from './routes/cases.js';

// Carrega variáveis de ambiente
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rotas de API
app.use('/api/blog-posts', blogPostsRoute);
app.use('/api/cases', casesRoute);

// Servir arquivos estáticos do frontend (dist) em produção
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
if (process.env.NODE_ENV === 'production') {
  const staticPath = path.join(__dirname, '../frontend/dist');
  app.use(express.static(staticPath));
  // Rota wildcard para servir index.html do frontend para qualquer rota não encontrada (SPA fallback)
  app.get('*', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
  });
}

// Inicia o servidor na porta especificada em .env ou 3333 por padrão
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
