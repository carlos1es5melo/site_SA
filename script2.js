function calcularPonte(r1, r2, r3) {
    return (r2 * r3) / r1
}

let resultado = document.getElementById('resultado')

function principal() {
    let r1 = Number(document.getElementById('r1').value)
    let r2 = Number(document.getElementById('r2').value)
    let r3 = Number(document.getElementById('r3').value)

    let valorPonte = calcularPonte(r1, r2, r3);
    resultado.innerHTML = `Rx = ${valorPonte.toFixed(2)}`
}