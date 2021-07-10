<?php 
  $dbhost = "localhost"; $dbuser = "root";
  $dbpass = ""; $db = "loginsdb";
  $conn = new mysqli($dbhost, $dbuser, $dbpass, $db) or die ("Connection Failed: %s\n". $conn -> error);

  $userTest = test_input($_POST["username"]);
  $pswTest = test_input($_POST["psw"]);

  $userQuery = "SELECT * FROM logins WHERE username='$userTest' AND psw='$pswTest'"; 
  $userData = $conn -> query($userQuery);
  $validation = mysqli_fetch_array($userData);

  if (!$validation) 
    header("location: ./failure.php");
  else 
    header("location: ../index.html");

  function test_input($data) {
    $data = htmlspecialchars($data);
    $data = stripslashes($data);
    $data = trim($data);
    return $data;
  }
?>