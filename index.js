
let numeroComputador
let numeroUsuario = []
let tentativas = 0
let maxTentativas = 10

function newGame() {
    window.location.reload()
}


function init() {
   numeroComputador = Math.floor(Math.random() * 10 + 1)
   console.log(numeroComputador)
}

function compararNumero() {
   const numUsuario = Number(document.getElementById('inputBox').value)
   numeroUsuario.push(' ' + numUsuario)
   document.getElementById('guesses').innerHTML = numeroUsuario

    if (tentativas < maxTentativas) {
        if (numUsuario > numeroComputador) {
            document.getElementById('textOutput').innerHTML = 'Seu número é maior'
            document.getElementById('inputBox').value = ''
            tentativas++
            document.getElementById('attempts').innerHTML = tentativas
           }
           else if (numUsuario < numeroComputador) {
            document.getElementById('textOutput').innerHTML = 'Seu número é menor'
            document.getElementById('inputBox').value = ''
            tentativas++
            document.getElementById('attempts').innerHTML = tentativas
           }
           else {
            document.getElementById('textOutput').innerHTML = 'Parabéns!!!'
            tentativas++
            document.getElementById('attempts').innerHTML = tentativas
            document.getElementById('inputBox').setAttribute('lerSomente', 'lerSomente')
           }
    }
    else {
        document.getElementById('textOutput').innerHTML = 'Você predeu! O número do computador era: ' + numeroComputador
        document.getElementById('inputBox').setAttribute('lerSomente', 'lerSomente')
    }

   
}