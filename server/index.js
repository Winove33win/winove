import express from 'express';
import cors from 'cors';
import checkoutRoute from './routes/checkout.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', checkoutRoute);

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
