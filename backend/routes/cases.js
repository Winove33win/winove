const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('../db');

const router = express.Router();
const useJsonDb = process.env.USE_JSON_DB === 'true';
const casesFile = path.join(__dirname, '../data/cases.json');

function parseJson(value) {
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}

router.get('/cases', async (_req, res) => {
  if (useJsonDb) {
    try {
      const cases = JSON.parse(fs.readFileSync(casesFile, 'utf-8'));
      return res.json(cases);
    } catch (err) {
      console.error('[cases-offline]', err);
      return res.status(500).json({ error: 'Failed to read cases file' });
    }
  }
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
  if (useJsonDb) {
    try {
      const cases = JSON.parse(fs.readFileSync(casesFile, 'utf-8'));
      const c = cases.find((caseItem) => caseItem.slug === req.params.slug);
      if (!c) return res.status(404).json({ error: 'Case not found' });
      return res.json(c);
    } catch (err) {
      console.error('[case-offline]', err);
      return res.status(500).json({ error: 'Failed to read case file' });
    }
  }
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
