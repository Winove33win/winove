import mysql from 'mysql2/promise';

const posts = [
  {
    titulo: 'Bem-vindo ao Blog',
    slug: 'bem-vindo-ao-blog',
    resumo: 'Post inaugural dando boas vindas ao blog.',
    conteudo: '<p>Este é o nosso primeiro post no blog!</p>',
    imagem: 'https://exemplo.com/post1.jpg',
    autor: 'Admin'
  },
  {
    titulo: 'Novidades da Plataforma',
    slug: 'novidades-da-plataforma',
    resumo: 'Veja o que mudou na última atualização.',
    conteudo: '<p>Muitas melhorias implementadas.</p>',
    imagem: 'https://exemplo.com/post2.jpg',
    autor: 'Admin'
  },
  {
    titulo: 'Dicas de Produtividade',
    slug: 'dicas-de-produtividade',
    resumo: 'Pequenas ações para melhorar seu dia a dia.',
    conteudo: '<p>Confira nossas dicas valiosas.</p>',
    imagem: 'https://exemplo.com/post3.jpg',
    autor: 'Equipe Winove'
  },
  {
    titulo: 'Entrevista com Especialista',
    slug: 'entrevista-com-especialista',
    resumo: 'Conversamos com um especialista sobre tecnologia.',
    conteudo: '<p>A entrevista completa está aqui.</p>',
    imagem: 'https://exemplo.com/post4.jpg',
    autor: 'Redação'
  },
  {
    titulo: 'Como usamos Tailwind',
    slug: 'como-usamos-tailwind',
    resumo: 'Veja como estilizamos rapidamente nossos componentes.',
    conteudo: '<p>Dicas e truques sobre Tailwind CSS.</p>',
    imagem: 'https://exemplo.com/post5.jpg',
    autor: 'Dev Team'
  },
  {
    titulo: 'Guia de Deploy',
    slug: 'guia-de-deploy',
    resumo: 'Passo a passo para publicar sua aplicação.',
    conteudo: '<p>Aprenda a fazer deploy com sucesso.</p>',
    imagem: 'https://exemplo.com/post6.jpg',
    autor: 'Admin'
  },
  {
    titulo: 'Integrações úteis',
    slug: 'integracoes-uteis',
    resumo: 'Serviços que podem facilitar seu workflow.',
    conteudo: '<p>Listamos algumas integrações interessantes.</p>',
    imagem: 'https://exemplo.com/post7.jpg',
    autor: 'Equipe Winove'
  },
  {
    titulo: 'Melhores Práticas de Segurança',
    slug: 'melhores-praticas-de-seguranca',
    resumo: 'Como proteger seu projeto na web.',
    conteudo: '<p>Algumas dicas de segurança.</p>',
    imagem: 'https://exemplo.com/post8.jpg',
    autor: 'Admin'
  },
  {
    titulo: 'Recursos Gratuitos',
    slug: 'recursos-gratuitos',
    resumo: 'Ferramentas gratuitas para acelerar o desenvolvimento.',
    conteudo: '<p>Uma lista de recursos úteis.</p>',
    imagem: 'https://exemplo.com/post9.jpg',
    autor: 'Equipe Winove'
  },
  {
    titulo: 'Próximos Passos da Plataforma',
    slug: 'proximos-passos-da-plataforma',
    resumo: 'O que estamos planejando para o futuro.',
    conteudo: '<p>Confira a nossa visão a longo prazo.</p>',
    imagem: 'https://exemplo.com/post10.jpg',
    autor: 'Admin'
  }
];

async function seedPosts() {
  const connection = await mysql.createConnection({
    host: 'lweb03.appuni.com.br',
    port: 3306,
    user: 'winove',
    password: '9*19avmU0',
    database: 'fernando_winove_com_br_'
  });

  const sql = `INSERT INTO posts (titulo, slug, resumo, conteudo, imagem_destacada, autor) VALUES (?, ?, ?, ?, ?, ?)`;

  try {
    for (const post of posts) {
      await connection.execute(sql, [post.titulo, post.slug, post.resumo, post.conteudo, post.imagem, post.autor]);
    }
    console.log('✅ 10 posts de exemplo inseridos.');
  } catch (error) {
    console.error('❌ Erro ao inserir posts:', error.message);
  } finally {
    await connection.end();
  }
}

seedPosts();
