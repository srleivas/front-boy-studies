<?php
  include 'index.php';

  $regex = new Regex;
  $customTextTest = '1,2,3,4,5,6,7,8,9 a?b C!d[e.f';
  $customSimbolsText = '1: !"#$%&\'()*+,-./ 2: :;<=>?@';

  $regex->regexConfig('match_all');
  // $regex->regexValidation($customTextTest, '/[1-9a-zA-Z]/i');
  // $regex->regexValidation($customTextTest, '/[15Ce]/');

  // $regex->regexValidation($customTextTest, '/[\d]/');
  // $regex->regexValidation($customTextTest, '/[\D]/');

  // $regex->regexValidation($customTextTest, '/[\w]/');
  // $regex->regexValidation($customTextTest, '/[\W]/');

  // $regex->regexValidation($customTextTest, '/[\s]/');
  // $regex->regexValidation($customTextTest, '/[\S]/');

  // $regex->regexValidation($customTextTest, '/\D/');
  // $regex->regexValidation($customTextTest, '/[^0-9]/');
  // $regex->regexValidation($customTextTest, '/[^\d!\?\[\s,\.]/');

  // $regex->regexValidation($customSimbolsText, '/[^!-\/:-@\s]/');

?>