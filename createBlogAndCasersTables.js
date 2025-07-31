import mysql from 'mysql2/promise';

async function setupDatabase() {
  const connection = await mysql.createConnection({
    host: 'lweb03.appuni.com.br',
    port: 3306,
    user: 'winove',
    password: '9*19avmU0',
    database: 'fernando_winove_com_br_'
  });

  const createPostsTable = `
    CREATE TABLE IF NOT EXISTS posts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      slug VARCHAR(255) UNIQUE NOT NULL,
      resumo TEXT,
      conteudo LONGTEXT,
      imagem_destacada TEXT,
      data_publicacao DATETIME DEFAULT CURRENT_TIMESTAMP,
      autor VARCHAR(255)
    );
  `;

  const createCasersTable = `
    CREATE TABLE IF NOT EXISTS casers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      cliente VARCHAR(255),
      descricao TEXT,
      resultados TEXT,
      imagem_capa TEXT,
      data_publicacao DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await connection.execute(createPostsTable);
    console.log("✅ Tabela 'posts' criada com sucesso.");

    await connection.execute(createCasersTable);
    console.log("✅ Tabela 'casers' criada com sucesso.");
  } catch (error) {
    console.error("❌ Erro ao criar tabelas:", error.message);
  } finally {
    await connection.end();
  }
}

setupDatabase();
