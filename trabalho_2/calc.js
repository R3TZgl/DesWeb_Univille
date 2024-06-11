operacao = (operacao) => {

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
    let display = document.getElementById('display')
    n1 = display.value
    display.value = ""
}