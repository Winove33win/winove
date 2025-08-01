import mysql from 'mysql2/promise';

async function testConnection() {
  try {
<<<<<<< HEAD
    const connection = await mysql.createConnection({
      host: 'lweb03.appuni.com.br',
      port: 3306,
      user: 'Winove',
      password: 'amilase1234', // 
      database: 'fernando_winove_com_br_'
    });
=======
      const connection = await mysql.createConnection({
        host: 'lweb03.appuni.com.br',
        port: 3306,
        user: 'winove',
        password: '9*19avmU0',
        database: 'fernando_winove_com_br_'
      });
>>>>>>> 5ad073b229cae442db1d2f108cb9a97d31745072

    console.log('✅ Conectado com sucesso ao banco de dados!');
    await connection.end();
  } catch (error) {
    console.error('❌ Falha ao conectar ao banco de dados:');
    console.error('* Código:', error.code, '\n* Mensagem:', error.message);
    if (error.address) console.error('* Host:', error.address);
    if (error.port) console.error('* Porta:', error.port);
  }
}

testConnection();
