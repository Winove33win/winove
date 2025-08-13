const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('../db');

const router = express.Router();
const useJsonDb = process.env.USE_JSON_DB === 'true';
const postsFile = path.join(__dirname, '../data/blog-posts.json');

router.get('/blog-posts', async (_req, res) => {
  if (useJsonDb) {
    try {
      const posts = JSON.parse(fs.readFileSync(postsFile, 'utf-8'));
      return res.json(posts);
    } catch (err) {
      console.error('[blog-posts-offline]', err);
      return res.status(500).json({ error: 'Failed to read blog posts file' });
    }
  }
  try {
    const queryAll = `
      SELECT id, titulo, slug, resumo, conteudo,
             imagem_destacada, data_publicacao, autor
      FROM blog_posts
      ORDER BY data_publicacao DESC`;
    const [rows] = await db.query(queryAll);
    res.json(rows);
  } catch (err) {
    console.error('[blog-posts]', err);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

router.get('/blog-posts/:slug', async (req, res) => {
  if (useJsonDb) {
    try {
      const posts = JSON.parse(fs.readFileSync(postsFile, 'utf-8'));
      const post = posts.find((p) => p.slug === req.params.slug);
      if (!post) return res.status(404).json({ error: 'Post not found' });
      return res.json(post);
    } catch (err) {
      console.error('[blog-post-offline]', err);
      return res.status(500).json({ error: 'Failed to read blog post file' });
    }
  }
  try {
    const { slug } = req.params;
    const queryOne = `
      SELECT id, titulo, slug, resumo, conteudo,
             imagem_destacada, data_publicacao, autor
      FROM blog_posts
      WHERE slug = ?`;
    const [rows] = await db.query(queryOne, [slug]);
    if (rows.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error('[blog-post]', err);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
});

module.exports = router;
