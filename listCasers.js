import mysql from 'mysql2/promise';

async function listCasers() {
  const connection = await mysql.createConnection({
    host: 'lweb03.appuni.com.br',
    port: 3306,
    user: 'winove',
    password: '9*19avmU0',
    database: 'fernando_winove_com_br_'
  });

  try {
    const [rows] = await connection.execute("SELECT * FROM casers ORDER BY data_publicacao DESC");
    console.log("📚 Casers encontrados:");
    console.table(rows);
  } catch (error) {
    console.error("❌ Erro ao buscar casers:", error.message);
  } finally {
    await connection.end();
  }
}

listCasers();
