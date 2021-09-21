<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "school_ITSH";

$connect = mysqli_connect($host, $user, $pass, $db);

if($connect == false)
{
  echo "Error connection";
}
 ?>
