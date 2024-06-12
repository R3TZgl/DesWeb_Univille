var n1 = 0
prox = false

operacao = (operacao) => {

    let display = document.getElementById('display')

    if (!prox){
        n1 = display.value
        display.value = ""
        prox = true
    }else{

    }

    if (operacao === 'X' & prox) {
        multiplicar(n1, n2)
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

multiplicar = () => {
    
}