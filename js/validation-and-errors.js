//Input validation
function validateString(input) {
  array = input.split('')
  var error = false
  //verifica lnput na posicao da tabela unicode utf-8
  // 32- espaço 65-90 Maiuscula e caractere especiais e numeros
  for (var i = 0; i < array.length; i++) {
    if (
      array[i].codePointAt(0) != 32 &&
      (array[i].codePointAt(0) < 97 || array[i].codePointAt(0) > 122) &&
      (array[i].codePointAt(0) < 65 || array[i].codePointAt(0) > 90)
    ) {
      error = true
      break
    }
  }
  return error
}

//Error message
function errorMsg() {
  var error = document.querySelector('#error')
  error.textContent = 'Error. foi digitado um caractere inválido.'
}
