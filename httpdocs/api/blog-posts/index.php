<?php
header('Content-Type: application/json');

$conn = new mysqli('localhost', 'winove', '9*19avmU0', 'fernando_winove_com_br_');
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro de conexão com o banco']);
    exit;
}

$slug = '';
if (isset($_SERVER['PATH_INFO'])) {
    $slug = trim($_SERVER['PATH_INFO'], '/');
}
if (!$slug && isset($_GET['slug'])) {
    $slug = $_GET['slug'];
}

if ($slug !== '') {
    $stmt = $conn->prepare('SELECT id, titulo, slug, resumo, conteudo, imagem_destacada AS imagem, data_publicacao AS criado_em, autor FROM posts WHERE slug = ?');
    $stmt->bind_param('s', $slug);
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        if ($row = $result->fetch_assoc()) {
            echo json_encode($row);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Post não encontrado']);
        }
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Erro ao buscar post']);
    }
    $stmt->close();
} else {
    $result = $conn->query('SELECT id, titulo, slug, resumo, imagem_destacada AS imagem, data_publicacao AS criado_em FROM posts ORDER BY data_publicacao DESC');
    $posts = [];
    while ($row = $result->fetch_assoc()) {
        $posts[] = $row;
    }
    echo json_encode($posts);
}

$conn->close();
