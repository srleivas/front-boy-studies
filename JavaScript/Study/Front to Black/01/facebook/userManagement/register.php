<?php 
  $dbhost = "localhost"; $dbuser="root";
  $dbpsw = ""; $db="facebook";

  $conn = new mysqli($dbhost, $dbuser, $dbpsw, $db) or die ("Error" . $conn -> error);

  $userTest = test_input($_POST["username"]);
  $pswTest = test_input($_POST["psw"]);

  $sql = "INSERT INTO logins (username, psw) VALUES ('$userTest', '$pswTest')";
  if (!empty($userTest) AND !empty($pswTest)) {
    $conn -> query($sql);
    header('location: ../index.html');
  }

  function test_input($data) {
    $data = htmlspecialchars($data);
    $data = stripslashes($data);
    $data = trim($data);

    return $data;
  }
?>