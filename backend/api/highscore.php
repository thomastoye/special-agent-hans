<?php

include_once("database.php");

/**
  * Post a highscore to the database
  */

function serverError(){
	header('HTTP/1.1 500 Internal Server Error');
    exit();
}

$mysqli = new mysqli($db["host"], $db["user"], $db["password"], $db["database"]);

if ($mysqli->connect_errno) {
    serverError();
}


if (!($stmt = $mysqli->prepare("INSERT INTO wa_opdr2_highscores(name, score) VALUES (?,?)"))) {
    echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

$name = htmlentities($_POST["name"]);
$score = htmlentities($_POST["score"]);

echo "name " . $name . " score " . $score . "\n\n";

if (!$stmt->bind_param("si", $name, $score)) {
    echo "Binding parameters failed {name}: (" . $stmt->errno . ") " . $stmt->error;
    serverError();
}

if (!$stmt->execute()) {
    echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
    serverError();
}
