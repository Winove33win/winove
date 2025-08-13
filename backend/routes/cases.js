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

function toArray(value) {
  if (!value) return [];
  if (typeof value === 'string') {
    try {
      const j = JSON.parse(value);
      return Array.isArray(j) ? j : [];
    } catch {
      return [];
    }
  }
  return Array.isArray(value) ? value : [];
}

router.get('/cases', async (_req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        id,
        titulo       AS title,
        slug,
        descricao    AS description,
        imagem       AS image,
        resultados   AS metrics,
        tags         AS tags,
        data_publicacao AS published_at
      FROM cases
      ORDER BY id DESC
    `);
    const data = rows.map((r) => ({
      ...r,
      metrics: toArray(r.metrics),
      tags: toArray(r.tags),
    }));
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

router.get('/cases/:slug', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `
      SELECT 
        id,
        titulo       AS title,
        slug,
        conteudo     AS content,
        descricao    AS description,
        imagem       AS image,
        resultados   AS metrics,
        tags         AS tags,
        data_publicacao AS published_at
      FROM cases
      WHERE slug = ?
      LIMIT 1
    `,
      [req.params.slug]
    );

    if (!rows.length) return res.status(404).json({ error: 'not_found' });

    const row = rows[0];
    const data = {
      ...row,
      metrics: toArray(row.metrics),
      tags: toArray(row.tags),
    };
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

module.exports = router;

