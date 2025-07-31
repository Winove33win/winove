<?php
$slug = basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

if (!$slug || $slug === 'index.php') {
  echo "❌ Slug não informado.";
  exit;
}

$apiUrl = "https://winove.com.br/api/blog-posts.php";
$json = file_get_contents($apiUrl);
$posts = json_decode($json, true);

$postSelecionado = null;
foreach ($posts as $post) {
  if ($post['slug'] === $slug) {
    $postSelecionado = $post;
    break;
  }
}

if (!$postSelecionado) {
  http_response_code(404);
  echo "<h1>404 - Post não encontrado</h1>";
  exit;
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title><?= $postSelecionado['titulo'] ?></title>
  <meta name="description" content="<?= $postSelecionado['resumo'] ?>">
  <style>
    body { font-family: Arial; max-width: 800px; margin: auto; padding: 20px; line-height: 1.6; }
    img { max-width: 100%; margin: 20px 0; }
    .meta { font-size: 0.9em; color: #777; margin-bottom: 10px; }
  </style>
</head>
<body>
  <h1><?= $postSelecionado['titulo'] ?></h1>
  <div class="meta">
    Publicado em <?= date('d/m/Y', strtotime($postSelecionado['data_publicacao'])) ?> por <?= $postSelecionado['autor'] ?>
  </div>

  <?php if (!empty($postSelecionado['imagem_destacada'])): ?>
    <img src="<?= $postSelecionado['imagem_destacada'] ?>" alt="Imagem destacada">
  <?php endif; ?>

  <div class="conteudo">
    <?= $postSelecionado['conteudo'] ?>
  </div>
</body>
</html>
