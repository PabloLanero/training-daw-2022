// Debería calcular el factorial de un número n

function factorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) { // <-- off-by-one
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(170)); // Esperado: 120