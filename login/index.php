<?php
session_start();

    include("connection.php");
    include("functions.php");

    $user_data = check_login($con);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style_index.css">
    <title>Logged in</title>
</head>
<body style="background-image: url('imgs/bg_prijava.png');" onload="startTime()">  

    <div class="header">
        <button id="back">
            <img src="imgs/back.png" alt="" class="btn_img">
        </button>
        <!-- <label id="welcome">Pozdrav, <?php echo $user_data['firstName'] ?>!</label> -->
        <img id="kset" src="imgs/kset_orangeLogo.png" alt="">
        <!-- <label id="time"></label> -->
        <button id="logout">
            <img src="imgs/logout.png" alt="" class="btn_img">
        </button>
    </div>

    <!-- <a href="logout.php">Logout</a> -->
    <h1>This is the index page</h1>
    <br>
    Hello, <?php echo $user_data['firstName'] ?>

    <div class="footer">
        <button id="back">
            <img src="imgs/back.png" alt="" class="btn_img">
        </button>
        <!-- <label id="welcome">Pozdrav, <?php echo $user_data['firstName'] ?>!</label> -->
        <img id="kset" src="imgs/kset_orangeLogo.png" alt="">
        <!-- <label id="time"></label> -->
        <button id="logout">
            <img src="imgs/logout.png" alt="" class="btn_img">
        </button>
    </div>
    <script src="js/script_index.js"></script>
</body>
</html>
