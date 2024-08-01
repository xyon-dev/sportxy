<?php
# allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

# CONNECT to DB
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sportxy";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
};

# GLOBALS
$games; // array of teams : from request header (body)
$headers = getallheaders(); // will show all headers

# CONTROL
$type = $headers["type"];

if ($type == "f") {
  $games = $headers["body"]; // ARRAY teams 
  queryGames($games);
} else if ($type == "dst") {
  getGameInfo();
} else {
  getPlayerPool();
}

# getGameInfo
# in: request
# out: DST players ####
function getGameInfo()
{
  global $conn;
  $sql = "SELECT * FROM `nfl10102021dk` WHERE `position` IN ('DST');";
  $dbData = mysqli_query($conn, $sql);
  // check for no data
  if (mysqli_num_rows($dbData) < 1) {
    die("ERROR: try again - Game Info");
  };
  // declare array and loop through data
  $i = 0;
  $api_data = array();
  // put data in array
  while ($row = mysqli_fetch_assoc($dbData)) {
    array_push($api_data, $row);
    $i++;
  };
  // return data
  echo json_encode($api_data);
};

# get all from player pool
# in: query all
# out: full player pool ####
function getPlayerPool()
{
  global $conn;
  $sql = "SELECT * FROM `dk05s`;";
  $dbData = mysqli_query($conn, $sql);
  // check for no data
  if (mysqli_num_rows($dbData) < 1) {
    die("ERROR: try again - Get Pool");
  };
  // declare array and loop through data
  $i = 0;
  $api_data = array();
  // put data in array
  while ($row = mysqli_fetch_assoc($dbData)) {
    $post_id = 'post-' . $i;
    array_push($api_data, $row);
    $i++;
  };
  // return data
  echo json_encode($api_data);
};

# in:JSON array of teams
# out: JSON Players from selected teams
# query: "SELECT * FROM `dk05s` WHERE `TeamAbbrev`IN ("Teams", "Team"...);" 
# GameInfo data: "PHI@LAR 10/08/2023 04:05PM ET" 
function buildGamesString($games)
{
  $gameString = "";
  // $count = count(json_decode($games));
  // for($i=0; $i<$count; $i++){
  $gameDecoded = json_decode($games);
  $gameString .= strVal($games);
  $gameString = str_replace("[", "", $gameString);
  $gameString = str_replace("]", "", $gameString);
  $gameString = "(" . $gameString . ")";
  //getFilteredPlayerPool($gameString);
  return $gameString;
}
function getFilteredPlayerPool($query)
{ // $query = array of games : built to string
  global $conn;
  $sql = "SELECT * FROM `dk05s` WHERE `TeamAbbrev` IN $query;";
  //
  $dbData = mysqli_query($conn, $sql);
  // check for no data
  if (mysqli_num_rows($dbData) < 1) {
    die("ERROR: try again - Game String");
  };
  // declare array and loop through data
  $i = 0;
  $api_data = array();
  // put data in array
  while ($row = mysqli_fetch_assoc($dbData)) {
    array_push($api_data, $row);
    $i++;
  };
  // return data
  return $api_data;
}
function queryGames($games)
{
  $query = buildGamesString($games);
  $api = getFilteredPlayerPool($query);
  echo json_encode($api);
}
