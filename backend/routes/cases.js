const express = require('express');
const db = require('../db');

const router = express.Router();

function parseJson(value) {
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}

router.get('/cases', async (_req, res) => {
  try {
    const [rows] = await db.query('SELECT id, title, slug, excerpt, coverImage, tags, metrics FROM cases ORDER BY id DESC');
    const cases = rows.map((r) => ({
      ...r,
      tags: parseJson(r.tags),
      metrics: parseJson(r.metrics),
    }));
    res.json(cases);
  } catch (err) {
    console.error('[cases]', err);
    res.status(500).json({ error: 'Failed to fetch cases' });
  }
});

router.get('/cases/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const [rows] = await db.query('SELECT * FROM cases WHERE slug = ?', [slug]);
    if (rows.length === 0) return res.status(404).json({ error: 'Case not found' });
    const r = rows[0];
    res.json({
      ...r,
      tags: parseJson(r.tags),
      gallery: parseJson(r.gallery),
      metrics: parseJson(r.metrics),
    });
  } catch (err) {
    console.error('[case]', err);
    res.status(500).json({ error: 'Failed to fetch case' });
  }
});

module.exports = router;
