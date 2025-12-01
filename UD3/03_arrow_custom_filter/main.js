const assert = require('assert').strict;

function select(array, condition) {
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]
//Es lo mismo que el de antes pero en vez de declarar variables, usamos las flechas para declararlo en el momento
// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])

// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])