const cpfTag = document.getElementById('cpf');
const validationMessage = document.getElementById('validationParagraph');
const InitialValidationMessage = document.getElementById('validationParagraph').textContent;

function cpfFormatValidator ()
{
  cpfTag.addEventListener('keypress', e => {
    let providedCpf = cpfTag.value.replace(/\.|-/gi, '');
    if ((e.key == 'Enter') && cpfValidator(providedCpf) && isValidInput(providedCpf)) {
      validationMessage.textContent = 'This is a freaking valid cpf! Good Job!';
    }
    else if (e.key == 'Enter'){
      validationMessage.textContent = 'Nah, not valid';
    }
    else {
      validationMessage.textContent = InitialValidationMessage;
    }
  })
}

function cpfValidator(cpf, digitCountToValidate = 9, startsWith = 1, InitialCpf)
{
  let digitsBeforeCurrent = cpf.substr(0, digitCountToValidate);
  let currentDigits;
  let digitsArray = new Array;

  for(let i = 0; i < digitCountToValidate; i++) {
    digitsArray.push(digitsBeforeCurrent[i] * (i + startsWith));
  };
  
  currentDigits = digitsArray.reduce((total, current) => {
    total += current;
    return total;
  });

  currentDigits = digitsBeforeCurrent + (currentDigits % 11 == (10||11) ? 0 : currentDigits % 11);
  
  if (digitCountToValidate == 9) {
    return cpfValidator(currentDigits, 10, 0, cpf);
  }

  return currentDigits.substr(9,11) == InitialCpf.substr(9,11) ? true : false;
}

function isValidInput (cpf) {
  if ((cpf.match(/[1-9]/gi).length == 11) || cpf.length < 11) {
    return false;
  }
  else {
    return true
  }
}
cpfFormatValidator();