<?php
header("Access-Control-Allow-Headers: *");
// 
$headers = getallheaders();
$body = json_decode($headers["body"]);
$data = $body->data;
$site = $body->site;
//
$date = date("H") . date('i') . date('s');
$file = $site . "-" . $date . ".txt";
$numOfRosters = count($data);
//
$newFile = fopen($file, "a");
for ($i = 0; $i < $numOfRosters; $i++) {
  $player = $data[$i];
  $str = "$" . $player->salary . " " . $player->position . " " . $player->name . " " . $player->GameInfo . "\r\n";
  file_put_contents($file, $str, FILE_APPEND);
}
// s

echo json_encode("api/backend/" . $file);
