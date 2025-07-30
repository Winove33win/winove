

const app = express();
app.use(express.json());

// MySQL connection pool using environment variables
const dbPool = mysql.createPool({
  host: process.env.DB_HOST || 'lweb03.appuni.com.br',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  user: process.env.DB_USER || 'Winove',
  password: process.env.DB_PASSWORD || 'amilase1234',
  database: process.env.DB_NAME || 'fernando_winove_com_br_',
});

// Initialize Stripe with secret key
const stripe = Stripe(process.env.STRIPE_SECRET_KEY || '');

// Simple endpoint to create a payment session
app.post('/create-payment', async (req, res) => {
  try {
    const { templateId, templateName, amount, currency = 'brl' } = req.body;
    if (!templateId || !templateName || !amount) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: templateName,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.protocol}://${req.get('host')}/payment-success`,
      cancel_url: `${req.protocol}://${req.get('host')}/payment-canceled`,
    });

    // store order in MySQL
    await dbPool.execute(
      'INSERT INTO template_orders (template_id, template_name, amount, currency, stripe_session_id, status, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())',
      [templateId, templateName, amount, currency, session.id, 'pending']
    );

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
