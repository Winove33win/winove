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

function parseJson($value) {
    $decoded = json_decode($value, true);
    return $decoded ? $decoded : [];
}

if ($slug !== '') {
    $stmt = $conn->prepare('SELECT * FROM cases WHERE slug = ?');
    $stmt->bind_param('s', $slug);
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        if ($row = $result->fetch_assoc()) {
            $row['tags'] = parseJson($row['tags'] ?? '[]');
            $row['gallery'] = parseJson($row['gallery'] ?? '[]');
            $row['metrics'] = parseJson($row['metrics'] ?? '[]');
            echo json_encode($row);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Case não encontrado']);
        }
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Erro ao buscar case']);
    }
    $stmt->close();
} else {
    $result = $conn->query('SELECT * FROM cases ORDER BY date DESC');
    $cases = [];
    while ($row = $result->fetch_assoc()) {
        $row['tags'] = parseJson($row['tags'] ?? '[]');
        $row['gallery'] = parseJson($row['gallery'] ?? '[]');
        $row['metrics'] = parseJson($row['metrics'] ?? '[]');
        $cases[] = $row;
    }
    echo json_encode($cases);
}

$conn->close();
