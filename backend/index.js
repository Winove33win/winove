import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import casesRoute from './routes/cases.js';
import blogRoute from './routes/blogPosts.js';
import checkoutRoute from './routes/checkout.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', casesRoute);
app.use('/api', blogRoute);
app.use('/api', checkoutRoute);

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`API on :${port}`));
