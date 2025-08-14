import dotenv from 'dotenv';
dotenv.config(); // carrega .env ANTES de qualquer import que use process.env

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import blogPostsRoute from './routes/blogPosts.js';  // GET /api/blog-posts, /api/blog-posts/:slug
import casesRoute from './routes/cases.js';          // GET /api/cases,      /api/cases/:slug

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

// healthcheck simples
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, env: process.env.NODE_ENV || 'production' });
});

// ROTAS DA API (cada uma no seu prefixo)
app.use('/api/blog-posts', blogPostsRoute);
app.use('/api/cases',      casesRoute);

// monta rota de checkout apenas se a chave STRIPE_SECRET_KEY estiver definida
if (process.env.STRIPE_SECRET_KEY) {
  import('./routes/checkout.js')
    .then(({ default: checkoutRoute }) => {
      app.use('/api/checkout', checkoutRoute);
    })
    .catch((err) => {
      console.error('Erro ao carregar checkout:', err);
    });
}

// (opcional) rota 404 de API
app.use('/api', (_req, res) => res.status(404).json({ error: 'not_found' }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
