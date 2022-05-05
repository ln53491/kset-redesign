<?php
session_start();

    include("connection.php");
    include("functions.php");

    // $user_data = check_login($con);

    $message = '';
    $error_msg = '';
    $msg_success = '';
    $clickReg = '';

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        if(isset($_POST['signup'])){
            $message = '';
            $error_msg = '';
            $msg_success = '';
            $clickReg = '';

            $firstName = $_POST['firstName'];
            $lastName = $_POST['lastName'];
            $username = $_POST['usernameReg'];
            $password = $_POST['passwordReg'];
            $passowordConfirm = $_POST['passwordRegConfirm'];
            $email = $_POST['email'];
            $news = empty($_POST['news']) ? '0' : '1';

            $query = " SELECT * FROM users WHERE username = '{$username}' ";
            $run_query = mysqli_query($con, $query);

            if(empty($username)){
                $error_msg = "Korisničko ime ne smije biti prazno.";
            }
            elseif(mysqli_num_rows($run_query) > 0){
                $error_msg = "Korisnik već postoji.";
            }
            elseif(empty($firstName)){
                $error_msg = "Ime ne smije biti prazno.";
            }
            elseif(empty($lastName)){
                $error_msg = "Prezime ne smije biti prazno.";
            }
            elseif($passowordConfirm != $password){
                $error_msg = "Lozinke se ne podudaraju.";
            }
            elseif(empty($email) || !str_contains($email, '@')){
                $error_msg = "E-mail adresa mora biti valjana.";
            }
            elseif(strlen($password) < 8){
                $error_msg = "Lozinka mora biti dugačka barem 8 znakova.";
            }
            else{
                //save to database
                $user_id = random_num(20);
                $firstName = ucfirst(strtolower($firstName));
                $lastName = ucfirst(strtolower($lastName));
                $email = strtolower($email);          
                $query = "INSERT INTO users(user_id,username,password,firstName,lastName,email,news)
                            VALUES ('$user_id','$username','$password','$firstName','$lastName','$email','$news')";
                $run_query = mysqli_query($con, $query);
                if($run_query == true){
                    $msg_success = "Registracija uspješna!";
                }else{
                    $error_msg = "Registracija neuspješna.";
                }
                // header("Location: login.php");
                // die;    
            }
            $message = $error_msg;
            if($error_msg != '') {
                $clickReg = "document.getElementById('container_login').style.opacity = '0'; document.getElementById('reg').click();";
            }
        }
        elseif(isset($_POST['login'])){
            $message = '';
            $error_msg = '';
            $msg_success = '';

            $username = $_POST['username'];
            $password = $_POST['password'];
        
            $query = "SELECT * FROM users WHERE username = '$username' LIMIT 1";
            
            $run_query = mysqli_query($con, $query);
            if($run_query == true && mysqli_num_rows($run_query) > 0){
                $user_data = mysqli_fetch_assoc($run_query);
                if($user_data['password'] == $password){
                    $_SESSION['user_id'] = $user_data['user_id'];
                    header("Location: index.php");
                    die;
                } else{
                    $error_msg = "Pogrešna lozinka.";
                }
            } else{
                $error_msg = "Korisničko ime ne postoji.";
            }  
        }
        $message = $error_msg;
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
    <link rel="stylesheet" href="css/style_prijava.css">
    <title>KSET - prijava</title>
</head>
<body style="background-image: url('imgs/bg_prijava.png');">
    <span class="errorMsg" id="validation" style="transform: translateY(-20px); color: #FF5E5E; text-shadow: 2px 4px 5px rgba(0,0,0,1);"><?php echo $message;?></span>
    <span class="goodMsg" id="validation2" style="transform: translateY(-20px); color: #00EE04; text-shadow: 2px 4px 5px rgba(0,0,0,1);"><?php echo $msg_success;?></span>
    <div class="container_login" id="container_login">
        <h1>Prijavi se</h1>
        <form method="post">
            <div class="form-control">
                <input type="text" required name="username">
                <label>Korisničko ime</label>
            </div>

            <div class="form-control">
                <input type="password" required name="password">
                <label>Lozinka</label>
            </div>

            <button class="btn" id="login_btn" name="login" value="Login">Prijava</button>

            <p class="text">Nemaš račun? <a id="reg" href="#">Registriraj se</a></p>
        </form>
    </div>

    <div class="container_register" id="container_register">
        <h1>Registriraj se</h1>
        <form method="post">
            <div class="form-control-reg-ime form-control-regime">
                <input class="ime" type="text" required name="firstName">
                <label id="ime">Ime</label>
                <input class="prezime" type="text" required name="lastName">
                <label id="prezime">Prezime</label>
            </div>

            <div class="form-control-reg form-control-regime">
                <input type="text" required name="usernameReg">
                <label>Korisničko ime</label>
            </div>

            <div class="form-control-reg form-control-regime">
                <input type="text" required name="email">
                <label>E-mail</label>
            </div>

            <div class="form-control-reg form-control-regime">
                <input type="password" required name="passwordReg">
                <label>Nova lozinka</label>
            </div>
            <div class="form-control-reg form-control-regime">
                <input type="password" required name="passwordRegConfirm">
                <label>Ponovljena lozinka</label>
            </div>

            <div class="checkbox">
                <input type="checkbox" checked value = '1' id="checkbox" name="news">
                <label>Želim primati novosti o Klubu na e-mail</label>
            </div>

            <button class="btn" id="register_btn" name="signup" value="Signup">Registracija</button>

            <p class="text">Već imaš račun? <a id="login" href="#">Prijavi se</a></p>
        </form>
    </div>
    <script src="js/script_prijava.js"></script>
    <script><?php echo $clickReg;?></script>
</body>
</html>