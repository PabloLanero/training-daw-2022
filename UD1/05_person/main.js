// Crear un objeto Persona con los siguientes 
// datos (nombre, apellidos, edad, género, dirección)

const assert = require('assert').strict;

function createPerson(name, lastname, years, gender, address) {
    return {
        name: name,
        lastname: lastname,
        years: years,
    }
}

let person = createPerson('John', 'Foo', 35, 'male', 'fake stree 123')
console.log(assert.strictEqual(person.name, 'John'))
console.log(assert.strictEqual(person.lastname, 'Foo'))