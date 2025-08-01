import express from 'express';
import cors from 'cors';
import blogPostsRoute from './routes/blogPosts.js';
import casesRoute from './routes/cases.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use('/api', blogPostsRoute);
app.use('/api', casesRoute);

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Erro no servidor:', error);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  console.log(`📊 Health check: http://localhost:${port}/api/health`);
});
