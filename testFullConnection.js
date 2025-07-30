// testFullConnection.js
import mysql from 'mysql2/promise';

async function testConnection() {
  console.log("🔧 Iniciando tentativa de conexão ao banco...");

  const connectionConfig = {
    host: 'lweb03.appuni.com.br',
    port: 3306,
    user: 'winove',
    password: 'amilase1234@',
    database: 'fernando_winove_com_br',
  };

  try {
    const connection = await mysql.createConnection(connectionConfig);
    console.log("✅ Conexão estabelecida com sucesso!");
    await connection.end();
  } catch (error) {
    console.error("❌ Falha ao conectar ao banco de dados:", error.message);
  }
}

testConnection();
