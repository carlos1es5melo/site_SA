function calcularC(c) {
    return (c * 1.8) + 32;
}

function calcularF(f) {
    return (f - 32) / 1.8;
}

function principal() {
    let op = document.getElementById('conversor')
    let temp = document.getElementById('temperatura')

    if (op === 'F') {
        let fahr = calcularF(temp);
        console.log("Resultado:", fahr);
    } else if (op === 'C') {
        let celsius = calcularC(temp);
        console.log("Resultado:", celsius);
    }
}

principal();