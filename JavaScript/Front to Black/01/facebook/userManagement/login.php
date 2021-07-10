<?php
  if (empty($_POST["username"]) OR empty($_POST["psw"])) {
    header('location: ../index.html');
    die;
  }
  
  $dbhost = "localhost"; $dbuser = "root";
  $dbpass = ""; $db = "facebook";
  
  $conn = new mysqli($dbhost, $dbuser, $dbpass, $db) or die("Failed: " . $conn->error);

  $userTest = test_input($_POST["username"]);
  $pswTest = test_input($_POST["psw"]);

  $userData = $conn->query("SELECT * FROM logins WHERE username='$userTest' AND psw='$pswTest'");
  $validation = mysqli_fetch_array($userData);

  if ($validation) {
    session_start();
    $_SESSION["username"] = $userTest;
    $_SESSION["psw"] = $pswTest;
    echo "<script>window.location.href='../pages/facebook.php'</script>";
  } else {
    echo "<script>window.location.href='../pages/failure.php'</script>";
  }

  function test_input($data)
  {
    $data = htmlspecialchars($data);
    $data = stripslashes($data);
    $data = trim($data);

    return $data;
  }
?>