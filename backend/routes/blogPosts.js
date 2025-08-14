import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

// Lista posts
router.get('/', async (_req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT
        id,
        titulo AS title,
        slug,
        resumo AS excerpt,
        conteudo AS content,
        imagem_destacada AS coverImage,
        data_publicacao AS date,
        autor AS author
      FROM blog_posts
      ORDER BY data_publicacao DESC
    `);

    res.json(rows || []);
  } catch (err) {
    console.error('GET /api/blog-posts ->', err);
    res.status(500).json({ error: 'Erro ao carregar posts' });
  }
});

// 1 post por slug
router.get('/:slug', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `
      SELECT
        id,
        titulo AS title,
        slug,
        resumo AS excerpt,
        conteudo AS content,
        imagem_destacada AS coverImage,
        data_publicacao AS date,
        autor AS author
      FROM blog_posts
      WHERE slug = ?
      LIMIT 1
    `,
      [req.params.slug]
    );

    if (!rows?.length) return res.status(404).json({ error: 'Post não encontrado' });
    res.json(rows[0]);
  } catch (err) {
    console.error('GET /api/blog-posts/:slug ->', err);
    res.status(500).json({ error: 'Erro ao carregar post' });
  }
});

export default router;
