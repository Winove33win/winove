const express = require('express');
const cors = require('cors');
const path = require('path');
const blogPostsRouter = require('./routes/blogPosts');
const casesRouter = require('./routes/cases');
const checkoutRouter = require('./routes/checkout');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const frontendPath = path.join(__dirname, 'dist');
app.use(express.static(frontendPath));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use('/api', blogPostsRouter);
app.use('/api', casesRouter);
app.use('/api', checkoutRouter);

app.get('*', (_req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

module.exports = app;
