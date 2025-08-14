import { Router } from 'express';
import Stripe from 'stripe';

const router = Router();

const stripeSecret = process.env.STRIPE_SECRET_KEY;
let stripe = null;
if (stripeSecret) {
  stripe = new Stripe(stripeSecret, { apiVersion: '2023-10-16' });
} else {
  console.error('STRIPE_SECRET_KEY not configured');
}

router.post('/', async (req, res) => {
  if (!stripe) {
    return res.status(500).json({ error: 'Stripe not configured' });
  }
  const produtos = {
    template_restaurante: { name: 'Restaurant Deluxe', price: 12990 },
    template_consultorio: { name: 'Consultório Premium', price: 14990 },
  };

  if (!req.body || typeof req.body.id !== 'string') {
    console.warn('[checkout] id ausente ou inválido:', req.body?.id);
    return res.status(400).json({ error: 'ID do produto ausente ou inválido' });
  }

  const { id } = req.body;
  console.log('[checkout] requested', id);

  const produto = produtos[id];
  if (!produto) {
    console.warn('[checkout] produto invalido:', id);
    return res.status(400).json({ error: 'Produto inválido' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: { name: produto.name },
            unit_amount: produto.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://winove.vercel.app/sucesso',
      cancel_url: 'https://winove.vercel.app/cancelado',
    });

    res.json({ sessionId: session.id });
  } catch (err) {
    console.error('[checkout] stripe error:', err);
    res.status(500).json({ error: 'Erro ao criar sessão de pagamento.' });
  }
});

export default router;
