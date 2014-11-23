<?php

include_once("database.php");

/**
  * Get a list of JSON-encoded highscores
  * This will return the 10 highest scores
  */

$mysqli = new mysqli($db["host"], $db["user"], $db["password"], $db["database"]);

if ($mysqli->connect_errno) {
    header('HTTP/1.1 500 Internal Server Error');
    exit();
}

if ($result = $mysqli->query("SELECT name, score FROM `wa_opdr2_highscores` ORDER BY score DESC LIMIT 10")) {

    $res = array();
    while ($row = $result->fetch_assoc())
    	$res[] = $row;

    $result->close();

    header("Content-Type: application/json");
    echo json_encode($res);
}


$mysqli->close();