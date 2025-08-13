import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Função auxiliar para converter JSON string em objeto/array JavaScript
const parseJSONField = (value) => {
  if (!value) return null;
  if (typeof value === 'string') {
    try {
      return JSON.parse(value);
    } catch (err) {
      console.error('Erro ao fazer parse do JSON:', err);
      return null;
    }
  }
  // Se já for um objeto/array (tipo JSON do MySQL), retorna como está
  return value;
};

// Lista todos os cases
router.get('/', async (_req, res) => {
  try {
    // Seleciona apenas colunas existentes na tabela `cases` e alia created_at para date.
    const [rows] = await pool.query(`
      SELECT
        id,
        title,
        slug,
        excerpt,
        coverImage,
        content,
        client,
        category,
        created_at AS date,
        tags,
        metrics,
        gallery
      FROM cases
      ORDER BY created_at DESC, id DESC
    `);
    // Converte campos JSON (tags, gallery, metrics) para arrays/objetos
    const data = rows.map(row => {
      const tags = parseJSONField(row.tags) ?? [];
      const gallery = parseJSONField(row.gallery) ?? [];
      const metrics = parseJSONField(row.metrics) ?? {};
      return { ...row, tags, gallery, metrics };
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

// Detalhe de um case por slug
router.get('/:slug', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `
      SELECT
        id,
        title,
        slug,
        excerpt,
        coverImage,
        content,
        client,
        category,
        created_at AS date,
        tags,
        metrics,
        gallery
      FROM cases
      WHERE slug = ?
      LIMIT 1
      `,
      [req.params.slug]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: 'not_found' });
    }
    const row = rows[0];
    // Converte campos JSON do registro encontrado
    const data = {
      ...row,
      tags: parseJSONField(row.tags) ?? [],
      gallery: parseJSONField(row.gallery) ?? [],
      metrics: parseJSONField(row.metrics) ?? {}
    };
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

export default router;
