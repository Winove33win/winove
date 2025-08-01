import express from 'express';
import db from '../db.js';

const router = express.Router();

router.get('/blog-posts', async (_req, res) => {
  try {
    // Match the PHP endpoint structure: blog_posts table with column mapping
    const [rows] = await db.query(
      'SELECT id, titulo, slug, resumo, conteudo, imagem_destaque as imagem_destacada, criado_em as data_publicacao, autor FROM blog_posts ORDER BY criado_em DESC'
    );
    res.json(rows);
  } catch (err) {
    console.error('[blog-posts]', err);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

router.get('/blog-posts/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    // Match the PHP endpoint structure: blog_posts table with column mapping
    const [rows] = await db.query('SELECT id, titulo, slug, resumo, conteudo, imagem_destaque as imagem_destacada, criado_em as data_publicacao, autor FROM blog_posts WHERE slug = ?', [slug]);
    if (rows.length === 0)
      return res.status(404).json({ error: 'Post not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error('[blog-post]', err);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
});

export default router;
