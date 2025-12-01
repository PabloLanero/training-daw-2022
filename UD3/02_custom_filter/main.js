const assert = require('assert').strict;

function select(array, condition) {
    let result = []

    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            result.push(array[i])
        }
        
    }
    return result
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

function isPair(value) {return value % 2 ===0}
function gt15(value) {return value >15}

let result = select(values, (number) => {numer%2===0})
console.log(result)
// sólo pares
assert.deepStrictEqual(select(values, isPair), [2])

// mayores que 15
let result15 = select(values, gt15)
console.log(result15)
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// // menores de 10
 assert.deepStrictEqual(select(values, (a) => a<10), [1, 2, 3, 5, 7])