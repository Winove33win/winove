import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import blogPostsRoute from './routes/blogPosts.js';
import casesRoute from './routes/cases.js';
import checkoutRoute from './routes/checkout.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

// healthcheck
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, env: process.env.NODE_ENV || 'production' });
});

// API
app.use('/api', checkoutRoute);
app.use('/api/blog-posts', blogPostsRoute);
app.use('/api/cases', casesRoute);

// (opcional) servir estáticos somente se você optar por servir o front pelo Node.
// No Plesk, vamos manter o Apache servindo / e deixar o Node apenas em /api.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
