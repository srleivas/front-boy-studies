<?php

declare(strict_types=1);

require 'ClasseBase.php';

class ClasseTeste extends ClasseBase {

    function returnMagicConstantsTable($selectConstant = '') {

        if ($selectConstant) {
            $selectConstant = strtoupper(str_replace('_', '', $selectConstant));
        }

        $magicConstants = [
            'LINE'      => __LINE__,
            'FILE'      => __FILE__,
            'DIR'       => __DIR__,
            'FUNCTION'  => __FUNCTION__,
            'CLASS'     => __CLASS__,
            'TRAIT'     => __TRAIT__,
            'METHOD'    => __METHOD__,
            'NAMESPACE' => __NAMESPACE__,
        ];

        if (!$selectConstant) {
            foreach ($magicConstants as $key => $val) {
                $th[] = "<th><small value='$key'>$key</small></th>";
                $td[] = "<td><small>$val</small></td>";
            }

            $table = "<table><thead><tr>" . implode($th) . "</tr></thead><tbody><tr>" . implode($td) . "</tr></tbody></table>";
            return $table;
        }

        if ($selectConstant && array_key_exists($selectConstant, $magicConstants)) {
            $th = "<th><small>" . $selectConstant . "</small></th>";
            $td = "<td><small>" . $magicConstants[$selectConstant] . "</small></td>";

            $table = "<table><thead><tr>$th</tr></thead><tr>$td</tr></table>";
            return $table;
        }
        if ($selectConstant && !array_key_exists($selectConstant, $magicConstants)) {
            return '<h2>Não Encontrado</h2>';
        }
    }

    function contentWithinDiv($content, $options = []): string {
        if ($options) {
            return "<div class={$options['class']}>$content</div>";
        } else {
            return "<div>$content</div>";
        }
    }

    function reverseWords($string = ''): string {
        return implode(' ', array_reverse(explode(' ', strrev($string))));
    }

    function sortArrayIntoString($array = [], $separator = '***'): string {
        sort($array);
        return implode($separator, str_split($array[0]));
    }

    function highestScoreWord($string = '') {
        $words = explode(' ', $string);
        $highestScoreWord = '';
        $highestScore = 0;

        foreach ($words as $word) {
            $chars = str_split($word);
            $points = 0;

            foreach ($chars as $char) {
                $points += ord($char) - 96;
            }
            
            if ($points > $highestScore) {
                $highestScore = $points;
                $highestScoreWord = $word;
            }
        }
        return $highestScoreWord;
    }
}
