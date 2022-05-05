<?php

$dbname = "login_database";

$dbhost = "localhost";
$dbusername = "root";
$dbpassword = "";
// $dbusername = "localhost";
$dbfirstName = "";
$dblastName = "";
$dbemail = "";
$dbnews = "";

if (!$con = mysqli_connect($dbhost, $dbusername, $dbpassword, $dbname)){
                            die("failed to connect");
                        }