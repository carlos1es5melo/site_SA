function calcularC(c) {
    return (c * 1.8) + 32;
}

function calcularF(f) {
    return (f - 32) / 1.8;
}

let resposta = document.getElementById('resposta')

function principal() {
    let op = document.getElementById('conversor').value
    let temperatura = Number(document.getElementById('temperatura').value)

    if (op === 'F') {
        let fahr = calcularC(temperatura)
        resposta.innerHTML = `Resultado = ${fahr.toFixed(2)} °F`
    } else if (op === 'C') {
        let celsius = calcularF(temperatura)
        resposta.innerHTML = `Resultado = ${celsius.toFixed(2)} °C`
    }
}