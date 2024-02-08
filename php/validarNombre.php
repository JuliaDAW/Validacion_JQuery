<?php
header('Content-Type: application/json');
$conn = new mysqli('localhost', 'root', '', 'Registro');
if ($conn->connect_error) {
    http_response_code(500);
    die("Connection failed: " . $conn->connect_error);
}
if(!isset($_POST['nombre'])) {
    http_response_code(400);
    die('No se ha enviado el nombre');
}
$nombre = $_POST['nombre'];
$sql = "SELECT * FROM usuario WHERE nombre = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "s", $nombre);
mysqli_stmt_execute($stmt);
$usuario = mysqli_stmt_get_result($stmt)->fetch_assoc();

if ($usuario) {
    echo json_encode('El nombre de usuario ' . $nombre . ' ya está en uso. Por favor, elija otro.');
} else {
    echo json_encode('true');
}

