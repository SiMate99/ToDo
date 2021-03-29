<?php

require './MySqlDB.php';

$mySql = new MySqlDB();

$teendo = array();
$result = $mySql->lekerdez("teendo");


if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {

        $teendo[] = $row;
    }
    echo json_encode($teendo);
} else {
    echo "0 results";
}

