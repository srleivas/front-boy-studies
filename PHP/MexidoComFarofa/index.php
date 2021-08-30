<?php
// Require
require 'ClasseTeste.php';

define('constX', '__s__');

$ClasseTeste = new ClasseTeste;

$table = $ClasseTeste->contentWithinDiv($ClasseTeste->returnMagicConstantsTable(''), ['class' => 'd']);
echo $table;

var_dump($ClasseTeste->reverseWords('Some string randomly chosen'));
var_dump($ClasseTeste->sortArrayIntoString(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
var_dump('Winner: ' . $ClasseTeste->highestScoreWord('abc def ghi jkl mno pqr stu vwx yz'));

// var_dump($_COOKIE);
$globalVar = 'Global = 1';

function varPorReferencia(&$globalRef) {
    $globalRef = 'Global = 2';
    // echo "Passado por referência: $globalRef. <br>Exibida localmente.";
}

echo "Dantes chamada: $globalVar <br>";
varPorReferencia($globalVar);
echo "Após chamada: $globalVar";

?>