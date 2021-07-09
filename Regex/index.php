<?php 
  class Regex {
    public $configs;
    public $separator;
    public $limit;

    public function regexConfig (...$args) 
    {
      $this->configs = isset($args[0]) ? $args[0] : 'match_one';
      // $this->separator = isset($args[1]) ? $args[1] : ',';
      $this->limit = isset($args[2]) ? $args[2] : -1;
    }

    function regexValidation ($checkText, $regexExp, $splitter = '')
    {
      set_error_handler(function ($errno, $errstr) {
        print_r($errstr);
        exit;
        ;
      });
  
      switch ($this->configs) 
      { 
        case 'match_one':
          preg_match($regexExp, $checkText, $matches);
          $matches = array($matches);
          break;

        case 'match_all':
          preg_match_all($regexExp, $checkText, $matches);
          break;

        case 'replace':
          $matches = preg_replace($regexExp, $splitter, $checkText, $this->limit);
          break;
          
        case 'split':
          $matches = array(preg_split($regexExp, $checkText, $this->limit));
          break;

        default:
          echo 'Choices are: match_one, match_all, replace, split ';
          return 1;
      }

      if (empty($matches[0]))
        echo "Expression didn't match any character\n====\n";
      else if (getType($matches[0]) == 'array')
        echo "Result from [${regexExp}] = " . implode($splitter, $matches[0]) . "\n====\n";
      else 
        echo $matches;
  }
}
?>