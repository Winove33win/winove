const express = require('express');
const Stripe = require('stripe');

const stripeSecret = process.env.STRIPE_SECRET_KEY;
if (!stripeSecret) {
  console.error('STRIPE_SECRET_KEY not configured');
}
const stripe = new Stripe(stripeSecret || '', { apiVersion: '2023-10-16' });

const router = express.Router();

router.post('/checkout', async (req, res) => {
  const { id } = req.body;
  console.log('[checkout] requested', id);

  const produtos = {
    template_restaurante: { name: 'Restaurant Deluxe', price: 12990 },
    template_consultorio: { name: 'Consultório Premium', price: 14990 },
  };

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

module.exports = router;
