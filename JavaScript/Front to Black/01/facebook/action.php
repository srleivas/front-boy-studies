<?php
  $login = $psw = "";

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = $_POST["username"];
    $psw = $_POST["psw"];
  }

  function test_inputs ($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
?>