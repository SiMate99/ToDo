<?php

require './MySqlDB.php';

parse_str(file_get_contents('php://input'), $adatom);
print_r($adatom);
$mySql = new MySqlDB();

$id = $adatom["ID"];
$todo = $adatom["todo"];
$datum = $adatom["datum"];
$allapot = $adatom["allapot"];

$updateString = "id='" . $id . "', todo='" . $todo . "', datum='" . $datum . "', allapot='" . $allapot . "'";
$mySql->frissit("teendo", $updateString, "ID=".$id);

