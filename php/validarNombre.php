<?php
header('Content-Type: application/json');
$conn = new mysqli('localhost', 'root', '', 'Registro');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$nombre = $_POST['nombre'];
$sql = "SELECT * FROM usuarios WHERE nombre = :nombre";
$stmt = $conn->prepare($sql);
$stmt->execute(['nombre' => $nombre]);
$usuario = $stmt->fetch();
if ($usuario) {
    http_response_code(400);
    echo json_encode(['error' => 'El nombre ya está en uso']);
} else {
    echo json_encode(['success' => 'El nombre está disponible']);
}

