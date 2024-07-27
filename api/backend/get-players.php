<?php
# allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

# CONNECT to DB
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "players";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
};

$msg = json_encode("got it");
