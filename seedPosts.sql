import mysql from 'mysql2/promise';
import { v4 as uuidv4 } from 'uuid';

async function seedPosts() {
  const connection = await mysql.createConnection({
    host: 'lweb03.appuni.com.br',
    port: 3306,
    user: 'winove',
    password: '9*19avmU0',
    database: 'fernando_winove_com_br_'
  });

  const posts = [
    {
      id: uuidv4(),
      titulo: 'Tendências de UX Design para 2025',
      slug: 'tendencias-ux-design-2025',
      resumo: 'Descubra as principais tendências de experiência do usuário que estão moldando o design digital neste ano.',
      conteudo: '<p>Design emocional, microinterações inteligentes, acessibilidade e personalização são tendências que vêm se consolidando em 2025...</p><img src="https://winove.com.br/uploads/ux2025.jpg" />',
      imagem_destacada: 'https://winove.com.br/uploads/ux2025.jpg',
      data_publicacao: '2025-07-28 10:30:00',
      autor: 'Rafael UX'
    },
    {
      id: uuidv4(),
      titulo: 'Checklist de SEO para Sites Institucionais',
      slug: 'checklist-seo-sites-institucionais',
      resumo: 'Confira a prática checklist de elementos essenciais de SEO on-page para garantir visibilidade do seu site no Google.',
      conteudo: '<p>Para que seu site institucional tenha bom ranqueamento, é essencial otimizar títulos, descrições, uso de palavras-chave, estrutura...</p><img src="https://winove.com.br/uploads/seo-checklist.jpg" />',
      imagem_destacada: 'https://winove.com.br/uploads/seo-checklist.jpg',
      data_publicacao: '2025-07-25 08:00:00',
      autor: 'Julia SEO'
    }
  ];

  for (let post of posts) {
    await connection.execute(`
      INSERT INTO posts 
      (id, titulo, slug, resumo, conteudo, imagem_destacada, data_publicacao, autor) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [post.id, post.titulo, post.slug, post.resumo, post.conteudo, post.imagem_destacada, post.data_publicacao, post.autor]
    );
  }

  console.log("✅ Posts inseridos com sucesso.");
  await connection.end();
}

seedPosts().catch(console.error);
