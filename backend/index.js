const app = require('./app');

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  console.log(`📊 Health check: http://localhost:${port}/api/health`);
});
