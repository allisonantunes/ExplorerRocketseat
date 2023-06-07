let number = 1

// operadores Binary (duas espressao)

console.log(number + 1)

// operador Unary (uma expresao)

console.log(++number)

// operador Ternary (tres espressões)

console.log(true ? "alo" : "nada")
console.log(false ? "alo" : "nada")

let date = new Date()
// let date = new Date('2023-05-26')
console.log(date)


// operadores unarios: typeof e delete
const person = {
    name: 'alison',
    age: 22
}
delete person.age

console.log(person);