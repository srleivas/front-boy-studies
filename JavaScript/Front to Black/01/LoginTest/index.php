<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login And register</title>
</head>

<body>
  <?php
  include "connection.php";
  $conn = openCon();

  // echo nl2br("Connected~\n");

  // createDb($conn, "LoginsDB");
  // dropDb($conn, "logins");
  // dropTable($conn, "logins");
  // createTable($conn, "logins");

  // registerUser($conn, "Jucão", "jucão247");

  function registerUser($conn, $username, $password) {
  $user = "INSERT INTO logins (username, psw) VALUES " . "('$username', " . "'$password')" ;

  if ($conn -> query($user)) {
    echo "User " . $username . " added";
  }
  else {
    echo "error: " . $conn -> error;
  }
}
  closeCon($conn);

  ?>

  Login:
  <form action="userManagement.php" method="POST">
  
  <label for="">Name</label>
  <input type="text" name="username" autocomplete="off" required>

  <label for="">Password</label>
  <input type="password" name="psw" autocomplete="off" required>

  <button type="submit">Login</button> OR
  <button type="button" onclick="window.location.href='./registerPage.php'">Register</button>
  </form>

</body>

</html>