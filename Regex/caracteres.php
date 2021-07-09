<?php
  include 'index.php';

  $regex = new Regex;
	// This punk below has vertical tabs (\v). Why? God knows why;
	$textWithTabsAndSpaces = 'Ca	r	r
	inho	s';
  $unicodeCharacters = 'Æ';

  $regex->regexConfig('match_all');{
    // $regex->regexValidation('Lorem ipsum dolor sit amet.', '/a/i');
    // $regex->regexValidation('4,5,6,7,8,9, a.b C!cyat?Meh', '/[a]/i');
    // $regex->regexValidation('1,2,3,4,5,6,7,8,9', '/1.2/');
    // $regex->regexValidation('1,2,3,4,5,6,7,8,9', '/1..2/');
    // $regex->regexValidation('6.5, 7.2, 10.0, 8.4', '/.\../');
    // $regex->regexValidation('darude.mp3, sandstorm.mp3, Brasilia Amarela.mp3, xmp3', '/\.mp3/');
    // $regex->regexValidation($textWithTabsAndSpaces, '/ca\tr\tr\v\v\tinho\ts/i');
    // $regex->regexValidation($textWithTabsAndSpaces, '/ca\tr\tr\v\v\tinhz\ts/i');
  };

  $regex->regexConfig('split', '');{
    $regex->regexValidation('1,2,3,8,9,a.b C!cyt?Meh', '/,|\.|\?|!| /');
    // $regex->regexValidation('1,2,3,8,9,a.b C!cyt?Meh', '/,/');
  };
?>