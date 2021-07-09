<?php
  include 'index.php';

  $regex = new Regex;
  $regex->regexConfig('match_all');
  $customText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, deleniti? ipsummmmm!';
  $customText2 = 'Lorem ipsu dolor sit amet consectetur adipisicing elit. Cum, deleniti? ipsu!';
  $customText3 = '0123456789';
  $customText4 = 'John has won 120 milion dollars gambling with numbers 6 9 21 23 45 46';
  
  // $regex->regexValidation($customText, '/ipsum?/i', ', ');
  // $regex->regexValidation($customText2, '/ipsum?/i', ', ');

  // $regex->regexValidation($customText, '/ipsum+/i', ', ');
  // $regex->regexValidation($customText2, '/ipsum+/i', ', ');
  
  // $regex->regexValidation($customText3, '/[0-9]/i', ', ');
  // $regex->regexValidation($customText3, '/[0-9]+/i', ', ');

  // $regex->regexValidation($customText, '/ipsum*/i', ', ');
  // $regex->regexValidation($customText2, '/ipsum*/i', ', ');
  
  // $regex->regexValidation($customText4, '/\d{1,2}/', ', ');
  // $regex->regexValidation($customText4, '/\d{2}/', ', ');
  // $regex->regexValidation($customText4, '/\d{1,}/', ', ');
  // $regex->regexValidation($customText4, '/\b\w{7}\b/', ', ');
  
?>