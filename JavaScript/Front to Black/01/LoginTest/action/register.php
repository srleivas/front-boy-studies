<?php
  // $inputContent = file_get_contents('php://input');
  // echo $inputContent;
  $dbhost = "localhost"; $dbuser = "root";
  $dbpsw = ""; $db = "loginsdb";
  $conn = new mysqli ($dbhost, $dbuser, $dbpsw, $db) or die ("Connection Failed " . $conn -> error);

  $userTest = test_input($_POST["username"]);
  $pswTest = test_input($_POST["psw"]);

  $userQuery = "INSERT INTO logins (username, psw) VALUES ('$userTest', '$pswTest')";
  if ($conn -> query($userQuery)) {
    echo "<script language='javascript'> alert('Account Created!') </script>";
    echo "<script language='javascript'> window.location.href='../index.php' </script>";
  }
  else {
    echo "<script language='javascript'> alert('Account Already Exists!') </script>";
    echo "<script language='javascript'> window.location.href='../index.php' </script>";
  }
  
  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  
?>