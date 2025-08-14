import express from 'express';
import mysql from 'mysql2/promise';

const router = express.Router();
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 5,
});

const ORIGIN = 'https://winove.com.br';

const normalizeUrl = (v) => {
  if (!v) return '';
  if (v.startsWith('/assets/')) return `${ORIGIN}${v}`;
  if (v.startsWith('www.')) return `https://${v}`;
  if (/^https?:\/\//i.test(v)) return v;
  return v; // deixe como está para URLs externas válidas
};

const toArray = (val) => {
  try {
    if (!val) return [];
    if (Array.isArray(val)) return val;
    const parsed = JSON.parse(val);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

router.get('/cases', async (_req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT
        id,
        title,
        slug,
        excerpt,
        coverimage     AS coverImage,
        tags,
        metrics,
        gallery,
        content,
        client,
        category,
        created_at
      FROM cases
      ORDER BY created_at DESC, id DESC
    `);

    const payload = rows.map((r) => {
      const coverImage = normalizeUrl(r.coverImage);
      const gallery = toArray(r.gallery).map(normalizeUrl);

      return {
        id: r.id,
        title: r.title || '',
        slug: r.slug || '',
        excerpt: r.excerpt || '',
        coverImage,        // usado na página de detalhe
        image: coverImage, // compat: se a listagem usa "image"
        tags: toArray(r.tags),
        metrics: toArray(r.metrics),
        gallery,
        content: r.content || '',
        client: r.client || '',
        category: r.category || '',
        // forneça data em ISO; o frontend formata para “pt-BR”
        published_at: r.created_at ? new Date(r.created_at).toISOString() : null,
      };
    });

    res.json(payload);
  } catch (err) {
    console.error('GET /api/cases error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
