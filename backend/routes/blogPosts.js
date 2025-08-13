import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Lista todos os posts do blog
router.get('/', async (_req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        id, 
        titulo, 
        slug, 
        resumo, 
        imagem_destacada, 
        data_publicacao, 
        autor
      FROM blog_posts
      ORDER BY data_publicacao DESC, id DESC
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

// Detalhe do post por slug
router.get('/:slug', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `
      SELECT 
        id, 
        titulo, 
        slug, 
        resumo, 
        conteudo, 
        imagem_destacada, 
        data_publicacao, 
        autor
      FROM blog_posts
      WHERE slug = ?
      LIMIT 1
    `,
      [req.params.slug]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: 'not_found' });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

export default router;
