import express from 'express';
import Stripe from 'stripe';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { db } from './db.js';

dotenv.config();
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const event = req.body;

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const customerEmail = session.customer_details.email;
    const amount = session.amount_total / 100;

    try {
      await db.query(
        'INSERT INTO pagamentos (email, valor, status, stripe_id) VALUES (?, ?, ?, ?)',
        [customerEmail, amount, 'sucesso', session.id]
      );
      res.status(200).send('Pagamento salvo com sucesso');
    } catch (error) {
      console.error('Erro ao salvar pagamento:', error);
      res.status(500).send('Erro interno');
    }
  } else {
    res.status(200).send('Evento ignorado');
  }
});

app.listen(4242, () => {
  console.log('Servidor Stripe rodando na porta 4242');
});
