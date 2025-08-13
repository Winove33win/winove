const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

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

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

