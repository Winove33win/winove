const express = require('express');
const mysql = require('mysql2/promise');

const router = express.Router();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 5,
});

// Lista posts
router.get('/blog', async (_req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT id, titulo AS title, slug, resumo AS excerpt,
             conteudo AS content, imagem_destacada AS featured_image,
             data_publicacao AS published_at, autor AS author
      FROM blog_posts
      ORDER BY data_publicicao DESC, id DESC
    `);
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'DB error' });
  }
});

// Detalhe por slug
router.get('/blog/:slug', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `
      SELECT id, titulo AS title, slug, resumo AS excerpt,
             conteudo AS content, imagem_destacada AS featured_image,
             data_publicacao AS published_at, autor AS author
      FROM blog_posts
      WHERE slug = ?
      LIMIT 1
    `,
      [req.params.slug]
    );
    if (!rows.length) return res.status(404).json({ error: 'not_found' });
    res.json(rows[0]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'DB error' });
  }
});

module.exports = router;

