import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// 🔧 Configurações via .env
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT || 3306;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_NAME;

async function testarConexao() {
  console.log("🔌 Tentando conectar ao banco de dados...");
  try {
    const connection = await mysql.createConnection({
      host: HOST,
      port: PORT,
      user: USER,
      password: PASSWORD,
      database: DATABASE,
    });

    console.log("✅ Conectado com sucesso!");

    // Criar tabela de teste (se nao existir)
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS conexao_teste (
        id INT AUTO_INCREMENT PRIMARY KEY,
        mensagem VARCHAR(255),
        criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Inserir linha de teste
    const [result] = await connection.execute(
      `
      INSERT INTO conexao_teste (mensagem) VALUES (?);
    `,
      ['Conexao bem-sucedida do Codex']
    );

    console.log(`📝 Registro inserido com ID: ${result.insertId}`);

    await connection.end();
    console.log("🔒 Conexao encerrada.");
  } catch (error) {
    console.error("❌ Erro ao conectar ou manipular o banco:", error.message);
  }
}

testarConexao();
