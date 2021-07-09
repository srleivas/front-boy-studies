<?php
  include 'index.php';

  $regex = new Regex;
  $regex->regexConfig('match_all');
  
  $url = 'https://www.google.com www.amz.vivr.br indiegala.com.nz dsdasds.comds'; 
  $html = '<body><div><p>Looking back, i see a setting sun and watch its shadow fade into the floor</p></div></body>'; 
  
  // $regex->regexValidation('hahahahaha', '/(ha)+/i', ', ');
  // $regex->regexValidation($url, '/(https:\/\/)?(w{3}\.)?\w+\.\w{2,}(\.\w{2,})?/i', ', ');
  // $regex->regexValidation($html, '/<(\w+)>.*<\/\1>/', ', ');
  // $regex->regexValidation('hipermercado, supermercado, mercado', '/((hiper|super)?mercado)/i', ', ');
  
  // Positive LookAhead - next character is X; (?=nextChar)
  $regex->regexValidation($html, '/[\w]+(?=>)/i', ', ');
  
  // Positive LookAhead - next character is not X; (?=nextChar)
  $regex->regexValidation($html, '/[\w]+[\s|\.|,](?!<)/i', '| ');
  
  $regex->regexConfig('replace', ' | ');
  // $regex->regexValidation($html, '/<(body)>/', '<Retrovisor > |$1| < backreference>');
?>