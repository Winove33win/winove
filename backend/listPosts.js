import mysql from 'mysql2/promise';

async function listPosts() {
  const connection = await mysql.createConnection({
    host: 'lweb03.appuni.com.br',
    port: 3306,
    user: 'winove',
    password: '9*19avmU0',
    database: 'fernando_winove_com_br_'
  });

  try {
    const [rows] = await connection.execute("SELECT * FROM posts ORDER BY data_publicacao DESC");
    console.log("📚 Posts encontrados:");
    console.table(rows);
  } catch (error) {
    console.error("❌ Erro ao buscar posts:", error.message);
  } finally {
    await connection.end();
  }
}

listPosts();
