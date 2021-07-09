<?php
  include 'index.php';

  $regex = new Regex();
  $regex->regexConfig('match_all');
  
  $cpf = 'Nome Sujo:
          - 575.585.150-68
          - 056.185.180-82';

  $regex->regexValidation($cpf, '/\d{3}\.\d{3}\.\d{3}-\d{2}/', ', ');
  
  $telefone = '
          - (51)3358-4697
          - (342)3358-4697
          - 3354-7985
          - 55479564';

  $regex->regexValidation($telefone, '/(\(\d{1,3}\))?\s?\d+-?\d{4}/', ',');

  $emails = '
          - 3murtada.xavi@myakapulko.cf
          - 0kareemsamara1@kintul.buzz
          - 4akrm_awawdahl@taluabushop.com
          - skanavaro222h@dis.draplo.com';

  $regex->regexValidation($emails, '/[\w\.]+?@\w+\.?\w+\.\w+/', ', ')
?>
