import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import casesRoute from './routes/cases.js';
import blogRoute from './routes/blogPosts.js';
import checkoutRoute from './routes/checkout.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/api', casesRoute);
app.use('/api', blogRoute);
app.use('/api', checkoutRoute);

app.use(express.static(path.resolve(__dirname, '../frontend/dist')));
app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
});

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`API on :${port}`));
