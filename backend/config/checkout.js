const successUrl = process.env.CHECKOUT_SUCCESS_URL || 'https://winove.vercel.app/sucesso';
const cancelUrl = process.env.CHECKOUT_CANCEL_URL || 'https://winove.vercel.app/cancelado';

const produtos = {
  template_restaurante: { name: 'Restaurant Deluxe', price: 12990 },
  template_consultorio: { name: 'Consultório Premium', price: 14990 },
};

export { successUrl, cancelUrl, produtos };
