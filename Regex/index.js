function regexValidation (checkText, regexEXP) 
{
  try {
    regexEXP.test(checkText)
    ? console.table(checkText.match(regexEXP))
    : '';
  }
  catch {
    console.log('Eu tento ver o que acontece mas acabo, complicaaannndoo! ');
  }
}

// regexValidation('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', /lorem ipsum/i);

let text = `Car	r
o`;

console.log(text.match(/Car\tr\n/i))