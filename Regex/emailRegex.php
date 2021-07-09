<?php
  include 'index.php';
  
  $regex = new Regex;

  $regex->regexConfig('match_one');
  $email = 'email@gmail.com';
  
  $regex->regexValidation($email, '/@.*\.*$/');

?>