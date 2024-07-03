<?php
$servername = "mysql"; // Service name defined in docker-compose.yml
$username = "root"; // Same as MYSQL_USER
$password = "root"; // Same as MYSQL_PASSWORD
$dbname = "instagram_clone"; // Same as MYSQL_DATABASE

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username='$user'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($pass, $row['password'])) {
            echo "Login successful!";
        } else {
            echo "Invalid password!";
        }
    } else {
        echo "No user found with that username!";
    }
}

$conn->close();
?>
