<?php

require './MySqlDB.php';
$mySql = new MySqlDB();
$todo = $_POST["todo"];
$datum = $_POST["datum"];

$mySql->ujRekord("teendo", "(todo,datum,allapot)", "('$todo','$datum', 0)");
echo json_encode($_POST);

