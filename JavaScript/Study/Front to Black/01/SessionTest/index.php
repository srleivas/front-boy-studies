<?php 
  session_start();

  $_SESSION["username"] = "NoctemUB";
?>

<form action="<?php echo $_SERVER['PHP_SELF']; ?>">
  Name:
  <input type="text" name="username">
  Password:
  <input type="text" name="psw">
  <button>Submit</button>
</form>