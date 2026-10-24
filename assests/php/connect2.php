

<?php

$userName = $_POST['userName'];
$passWord = $_POST['passWord'];
$rememberme = $_POST['rememberme'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'coffeenation_india.login_info');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // Check if the user's credentials match the ones stored in the database
    $stmt = $conn->prepare("SELECT * FROM registration WHERE userName = ?");
    $stmt->bind_param("s", $userName);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $hashedPassword = $row['passWord'];

        // Check if the user's password matches the hashed password
        if (password_verify($passWord, $hashedPassword)) {
            echo "Login Successful";

            // Set a session or cookie to remember the user's login credentials
            if ($rememberme == 'yes') {
                // Set a cookie or session to remember the user's login credentials
                // This will allow the user to stay logged in even after closing their browser
            }
        } else {
            echo "Invalid password";
        }
    } else {
        echo "Invalid username";
    }

    $stmt->close();
    $conn->close();
}

?>