
var n1 = 0
prox = false
operacao = (operacao) => {

    var display = document.getElementById('display')

    if (!prox){
        n1 = display.value
        display.value = ""
        prox = true
    }else{
        if (operacao === 'X' & prox) {
            multiplicar(n1, n2, display)
            prox = false
        }
        if (operacao === '=') {
            display.value = n1
        }
    }
}

btnNumero = (valor) => {
    let display = document.getElementById('display')
    display.value += valor
}

apagar = () => {
    let display = document.getElementById('display')
    display.value = ""
}

multiplicar = (n1, n2, display) => {
    display.value = n1 * n2
    n1 = display.value
}