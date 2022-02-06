//Obter meu input
function captureInput() {
  var input = document.querySelector('#input')
  return input.value
}

//Mostrar output
function output(encryptedString) {
  document.querySelector('#output').value = encryptedString
}
