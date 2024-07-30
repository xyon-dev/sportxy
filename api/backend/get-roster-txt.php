<?php
header("Access-Control-Allow-Headers: *");
// 
$headers = getallheaders();
$raw = json_decode($headers["body"]);
//
$file = "temp-0101.txt";
$newFile = fopen($file, "a");
$numOfRosters = count($raw);
for ($i = 0; $i < $numOfRosters; $i++) {
  $player = $raw[$i];
  $str = $raw[$i]->flex . "\r\n";
  file_put_contents($file, $str, FILE_APPEND);
}

echo json_encode($raw[0]->name->first);
