import mysql from 'mysql2/promise';

async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: 'lweb03.appuni.com.br',
      port: 3306,
      user: 'Winove',
      password: 'amilase1234', // 
      database: 'fernando_winove_com_br'
    });

    console.log('✅ Conectado com sucesso ao banco de dados!');
    await connection.end();
  } catch (error) {
    console.error('❌ Falha ao conectar ao banco de dados:');
    console.error(error.code, '-', error.message);
    if (error.address) console.error('🔹 Host:', error.address);
    if (error.port) console.error('🔹 Porta:', error.port);
  }
}

testConnection();
