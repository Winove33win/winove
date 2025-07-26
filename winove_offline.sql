CREATE DATABASE IF NOT EXISTS `Winove-new` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `Winove-new`;
CREATE TABLE IF NOT EXISTS blog_posts (id INT AUTO_INCREMENT PRIMARY KEY, slug VARCHAR(255), title VARCHAR(255), category VARCHAR(100), reading_time VARCHAR(50), author VARCHAR(100), date DATE, cover_image VARCHAR(255), excerpt TEXT, content TEXT);
INSERT INTO blog_posts (slug,title,category,reading_time,author,date,cover_image,excerpt,content) VALUES ('5-tendencias-marketing-digital-2024','5 Tendências de Marketing Digital para 2024','Marketing Digital','8 min','Equipe Winove','2023-12-15','photo-1460925895917-afdab827c52f','Descubra as principais estratégias que definirão o marketing digital no próximo ano e como aplicá-las no seu negócio.','
      <h2>O marketing digital está em constante evolução</h2>
      <p>Com a chegada de 2024, novas tendências emergem e prometem revolucionar a forma como as empresas se conectam com seus clientes. Neste artigo, exploramos as cinco principais tendências que definirão o cenário do marketing digital no próximo ano.</p>
      
      <h3>1. Inteligência Artificial Generativa</h3>
      <p>A IA generativa está transformando a criação de conteúdo, permitindo personalização em escala nunca vista antes. Empresas que adotarem essas tecnologias terão vantagem competitiva significativa.</p>
      
      <h3>2. Marketing de Voz e Pesquisa por Voz</h3>
      <p>Com o crescimento dos assistentes virtuais, otimizar para pesquisa por voz se torna essencial. O conteúdo conversacional e as palavras-chave de cauda longa ganham ainda mais importância.</p>
      
      <h3>3. Realidade Aumentada no E-commerce</h3>
      <p>A AR está revolucionando a experiência de compra online, permitindo que os consumidores "experimentem" produtos virtualmente antes da compra.</p>
      
      <h3>4. Sustentabilidade e Marketing Verde</h3>
      <p>Consumidores conscientes valorizam marcas sustentáveis. O marketing verde não é apenas uma tendência, mas uma necessidade para o futuro.</p>
      
      <h3>5. Privacidade e Marketing First-Party Data</h3>
      <p>Com o fim dos cookies de terceiros, o foco em dados próprios e estratégias de consentimento transparente se torna fundamental.</p>
      
      <h2>Conclusão</h2>
      <p>Estar à frente dessas tendências é crucial para o sucesso em 2024. Na Winove, ajudamos empresas a implementar essas estratégias de forma eficaz e mensurável.</p>
    ');
INSERT INTO blog_posts (slug,title,category,reading_time,author,date,cover_image,excerpt,content) VALUES ('seo-tecnico-transformar-resultados','Como o SEO Técnico Pode Transformar Seus Resultados','SEO','6 min','Ana Silva','2023-12-12','photo-1432888622747-4eb9a8efeb07','Aprenda as técnicas avançadas de SEO que podem aumentar significativamente sua visibilidade nos mecanismos de busca.','
      <h2>SEO Técnico: A Base de uma Estratégia Sólida</h2>
      <p>Enquanto muitos focam apenas em conteúdo e links, o SEO técnico é a fundação que sustenta toda estratégia de otimização. Vamos explorar como aspectos técnicos podem transformar seus resultados.</p>
      
      <h3>Core Web Vitals: O Novo Padrão</h3>
      <p>O Google prioriza sites que oferecem excelente experiência do usuário. Os Core Web Vitals medem:</p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> Velocidade de carregamento</li>
        <li><strong>FID (First Input Delay):</strong> Interatividade</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> Estabilidade visual</li>
      </ul>
      
      <h3>Estrutura de URLs e Arquitetura do Site</h3>
      <p>Uma arquitetura bem planejada facilita tanto para usuários quanto para crawlers:</p>
      <ul>
        <li>URLs descritivas e amigáveis</li>
        <li>Hierarquia lógica de páginas</li>
        <li>Navegação intuitiva</li>
      </ul>
      
      <h3>Schema Markup: Dados Estruturados</h3>
      <p>Implementar schema markup ajuda os mecanismos de busca a entender melhor seu conteúdo, resultando em rich snippets e maior CTR.</p>
      
      <h3>Mobile-First e Responsividade</h3>
      <p>Com a indexação mobile-first do Google, garantir que seu site seja totalmente responsivo não é opcional - é essencial.</p>
      
      <h2>Ferramentas Essenciais</h2>
      <p>Para monitorar e melhorar seu SEO técnico, recomendamos:</p>
      <ul>
        <li>Google Search Console</li>
        <li>Google PageSpeed Insights</li>
        <li>Screaming Frog</li>
        <li>GTmetrix</li>
      </ul>
      
      <h2>Resultados Comprovados</h2>
      <p>Implementando essas técnicas, nossos clientes viram aumentos médios de 150% no tráfego orgânico em 6 meses.</p>
    ');
INSERT INTO blog_posts (slug,title,category,reading_time,author,date,cover_image,excerpt,content) VALUES ('design-system-marcas-consistentes','Design System: O Segredo de Marcas Consistentes','Design','10 min','Carlos Designer','2023-12-10','photo-1581291518857-4e27b48ff24e','Entenda como um design system bem estruturado pode revolucionar a identidade visual da sua marca e melhorar a experiência do usuário.','
      <h2>O que é um Design System?</h2>
      <p>Um design system é uma coleção de componentes reutilizáveis, guiados por padrões claros, que podem ser combinados para construir qualquer número de aplicações.</p>
      
      <h3>Benefícios de um Design System</h3>
      <ul>
        <li><strong>Consistência:</strong> Experiência uniforme em todos os pontos de contato</li>
        <li><strong>Eficiência:</strong> Desenvolvimento mais rápido e econômico</li>
        <li><strong>Escalabilidade:</strong> Fácil expansão e manutenção</li>
        <li><strong>Colaboração:</strong> Melhor comunicação entre equipes</li>
      </ul>
      
      <h3>Componentes Essenciais</h3>
      <p>Um design system completo deve incluir:</p>
      
      <h4>1. Tokens de Design</h4>
      <ul>
        <li>Paleta de cores</li>
        <li>Tipografia</li>
        <li>Espaçamentos</li>
        <li>Sombras e elevações</li>
      </ul>
      
      <h4>2. Componentes de Interface</h4>
      <ul>
        <li>Botões e formulários</li>
        <li>Cards e modais</li>
        <li>Navegação</li>
        <li>Feedback e estados</li>
      </ul>
      
      <h4>3. Padrões de Interação</h4>
      <ul>
        <li>Microinterações</li>
        <li>Animações</li>
        <li>Transições</li>
        <li>Estados de hover/focus</li>
      </ul>
      
      <h3>Implementação Prática</h3>
      <p>Para implementar um design system eficaz:</p>
      <ol>
        <li><strong>Auditoria:</strong> Analise componentes existentes</li>
        <li><strong>Padronização:</strong> Defina regras e guidelines</li>
        <li><strong>Documentação:</strong> Crie uma biblioteca viva</li>
        <li><strong>Adoção:</strong> Treine equipes e monitore uso</li>
      </ol>
      
      <h3>Casos de Sucesso</h3>
      <p>Empresas como Airbnb, Uber e Shopify transformaram suas operações com design systems robustos, reduzindo tempo de desenvolvimento em até 60%.</p>
      
      <h2>O Futuro dos Design Systems</h2>
      <p>Com ferramentas como Figma Variables e Design Tokens, o futuro promete ainda mais automação e sincronização entre design e desenvolvimento.</p>
    ');
CREATE TABLE IF NOT EXISTS cases (id INT AUTO_INCREMENT PRIMARY KEY, slug VARCHAR(255), title VARCHAR(255), client VARCHAR(255), date DATE, cover_image VARCHAR(255), excerpt TEXT, challenge TEXT, solution TEXT, results TEXT);
INSERT INTO cases (slug,title,client,date,cover_image,excerpt,challenge,solution,results) VALUES ('ecommerce-techstyle-300-conversoes','TechStyle: Aumento de 300% nas Conversões','TechStyle E-commerce','2024-03-10','photo-1460925895917-afdab827c52f','Transformamos uma loja online em uma máquina de vendas com UX otimizado e estratégias de conversão avançadas.','O cliente tinha um e-commerce com baixa taxa de conversão (1.2%), navegação confusa e abandono de carrinho alto (78%). O site não era responsivo e tinha problemas de performance.','Implementamos um redesign completo focado em UX/UI, otimização de performance, checkout simplificado, implementação de prova social, testes A/B contínuos e estratégias de recuperação de carrinho abandonado.','Aumento de 300% na taxa de conversão, redução de 45% no abandono de carrinho, melhoria de 250% na velocidade de carregamento e aumento de 180% no ticket médio.');
INSERT INTO cases (slug,title,client,date,cover_image,excerpt,challenge,solution,results) VALUES ('rebranding-global-corp-150-reconhecimento','Global Corp: Rebranding que Gerou 150% Mais Reconhecimento','Global Corp Technology','2024-01-22','photo-1611224923853-80b023f02d71','Renovamos completamente a identidade visual de uma multinacional, criando uma marca moderna e memorável.','A Global Corp tinha uma identidade visual desatualizada que não refletia sua posição de liderança no mercado. A marca era inconsistente em diferentes pontos de contato e tinha baixo reconhecimento (12%) entre o público-alvo.','Desenvolvemos uma nova identidade visual completa incluindo logo, paleta de cores, tipografia, sistema de ícones, templates para materiais de marketing, guidelines de marca e implementação em todos os pontos de contato digitais e físicos.','Aumento de 150% no reconhecimento da marca, melhoria de 85% na percepção de modernidade, crescimento de 120% no engajamento em redes sociais e aumento de 95% na geração de leads qualificados.');
INSERT INTO cases (slug,title,client,date,cover_image,excerpt,challenge,solution,results) VALUES ('seo-healthcare-500-trafego-organico','HealthCare Plus: 500% Mais Tráfego Orgânico','HealthCare Plus Clinic','2024-02-15','photo-1576091160399-112ba8d25d1f','Posicionamos uma clínica médica no topo do Google com estratégia de SEO completa e marketing de conteúdo.','A clínica tinha visibilidade online praticamente zero, com apenas 200 visitantes orgânicos por mês. Não aparecia nas primeiras páginas para nenhuma palavra-chave relevante do setor médico.','Implementamos estratégia completa de SEO técnico, otimização on-page, criação de conteúdo especializado, link building ético, otimização para SEO local e implementação de schema markup médico.','Aumento de 500% no tráfego orgânico, 50+ palavras-chave na primeira página, crescimento de 400% em agendamentos online e posição #1 para termos principais da especialidade.');
INSERT INTO cases (slug,title,client,date,cover_image,excerpt,challenge,solution,results) VALUES ('startup-edtech-roi-8-1','EduTech Startup: ROI de 8:1 em Tráfego Pago','EduTech Learning Platform','2024-01-08','photo-1551434678-e076c223a692','Geramos um ROI excepcional para startup de educação com campanhas otimizadas de Google Ads e Facebook Ads.','Startup de educação online com orçamento limitado para marketing, CPA alto (R$ 180) e ROI negativo (-1.5:1). As campanhas não estavam segmentadas adequadamente e o funil de conversão tinha vazamentos.','Reestruturação completa das campanhas, segmentação avançada por persona, otimização do funil de conversão, implementação de remarketing inteligente, testes A/B de criativos e landing pages otimizadas.','ROI de 8:1, redução de 70% no CPA, aumento de 350% na taxa de conversão e crescimento de 180% no número de alunos pagantes.');
CREATE TABLE IF NOT EXISTS templates (id INT AUTO_INCREMENT PRIMARY KEY, slug VARCHAR(255), title VARCHAR(255), category VARCHAR(255), price DECIMAL(10,2), originalPrice DECIMAL(10,2), description TEXT, difficulty VARCHAR(50), pages INT, responsive BOOLEAN, seoOptimized BOOLEAN, demoUrl VARCHAR(255));
INSERT INTO templates (slug,title,category,price,originalPrice,description,difficulty,pages,responsive,seoOptimized,demoUrl) VALUES ('business-pro-template','Business Pro - Template Corporativo','Negócios',149.9,199.9,'Template profissional perfeito para empresas que desejam uma presença online impactante. Design moderno e responsivo com todas as páginas essenciais para um site corporativo completo.','Intermediário',8,1,1,'https://demo.example.com/business-pro');
INSERT INTO templates (slug,title,category,price,originalPrice,description,difficulty,pages,responsive,seoOptimized,demoUrl) VALUES ('restaurant-deluxe','Restaurant Deluxe - Template para Restaurantes','Alimentação',129.9,NULL,'Template elegante especialmente desenvolvido para restaurantes, cafés e estabelecimentos gastronômicos. Com design atrativo e funcionalidades específicas para o setor alimentício.','Iniciante',6,1,1,'https://demo.example.com/restaurant-deluxe');
INSERT INTO templates (slug,title,category,price,originalPrice,description,difficulty,pages,responsive,seoOptimized,demoUrl) VALUES ('portfolio-creative','Portfolio Creative - Template para Criativos','Portfolio',99.9,129.9,'Template minimalista e elegante perfeito para artistas, designers, fotógrafos e profissionais criativos que desejam showcasar seus trabalhos de forma impactante.','Iniciante',5,1,1,'https://demo.example.com/portfolio-creative');
INSERT INTO templates (slug,title,category,price,originalPrice,description,difficulty,pages,responsive,seoOptimized,demoUrl) VALUES ('ecommerce-fashion','E-commerce Fashion - Loja Virtual de Moda','E-commerce',199.9,249.9,'Template completo para loja virtual de moda com todas as funcionalidades necessárias para vender online. Design moderno e otimizado para conversões.','Avançado',12,1,1,'https://demo.example.com/ecommerce-fashion');
INSERT INTO templates (slug,title,category,price,originalPrice,description,difficulty,pages,responsive,seoOptimized,demoUrl) VALUES ('fitness-gym-template','Fitness Gym - Template para Academias','Saúde & Fitness',139.9,NULL,'Template energético e motivacional para academias, personal trainers e estúdios de fitness. Design que inspira ação e movimento.','Intermediário',7,1,1,'https://demo.example.com/fitness-gym');
INSERT INTO templates (slug,title,category,price,originalPrice,description,difficulty,pages,responsive,seoOptimized,demoUrl) VALUES ('wedding-planner','Wedding Planner - Template para Casamentos','Eventos',119.9,NULL,'Template romântico e elegante para wedding planners, fotógrafos de casamento e organizadores de eventos. Design que captura a magia dos momentos especiais.','Iniciante',6,1,1,'https://demo.example.com/wedding-planner');
CREATE TABLE IF NOT EXISTS testimonials (id INT PRIMARY KEY, name VARCHAR(255), role VARCHAR(255), company VARCHAR(255), content TEXT, rating INT, image VARCHAR(255));
INSERT INTO testimonials (id,name,role,company,content,rating,image) VALUES (1,'Carlos Silva','CEO','TechStart Solutions','A Winove transformou completamente nossa presença digital. Em 6 meses, vimos um crescimento de 400% no tráfego orgânico e 250% nas conversões. A equipe é extremamente profissional e orientada a resultados.',5,'photo-1472099645785-5658abf4ff4e');
INSERT INTO testimonials (id,name,role,company,content,rating,image) VALUES (2,'Ana Martins','Diretora de Marketing','Fashion Group','O trabalho de rebranding da Winove elevou nossa marca a um novo patamar. A identidade visual criada conectou perfeitamente com nosso público-alvo, resultando em um aumento de 180% no engajamento nas redes sociais.',5,'photo-1494790108755-2616b612b1c0');
INSERT INTO testimonials (id,name,role,company,content,rating,image) VALUES (3,'Roberto Costa','Fundador','EcoHealth','A estratégia de SEO implementada pela Winove nos posicionou na primeira página do Google para todas as palavras-chave relevantes. O ROI foi impressionante: cada real investido retornou 12 em vendas.',5,'photo-1507003211169-0a1dd7228f2d');
INSERT INTO testimonials (id,name,role,company,content,rating,image) VALUES (4,'Marina Santos','Proprietária','Boutique Luna','O e-commerce desenvolvido pela Winove superou todas as expectativas. A plataforma é rápida, intuitiva e as vendas online aumentaram 350% no primeiro trimestre. Recomendo sem hesitação!',5,'photo-1438761681033-6461ffad8d80');

-- Store template purchases made via Stripe
CREATE TABLE IF NOT EXISTS template_orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  template_id INT,
  template_name VARCHAR(255),
  amount INT,
  currency VARCHAR(10),
  stripe_session_id VARCHAR(255),
  status VARCHAR(50),
  created_at DATETIME
);
