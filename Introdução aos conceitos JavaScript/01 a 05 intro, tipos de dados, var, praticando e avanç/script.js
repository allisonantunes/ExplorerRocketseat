// comentario em js

/*
asdasdd
asdasdasd
asdasdd 
*/
console.log("hello world"); // alguma coisa console.log('iria ignorar')

console.log("----------------------");

// declarar uma variavel // declaration
var name

// atribuir valores // assignmet
name = 'allison'

// tipo de dado que esta variavel é

console.log(typeof name);

// agrupamento de declaração
let age, isHuman

age = 18
isHuman = true

// esta recebendo 3 argumentos
console.log(name, age, isHuman);

// escrita de texto com variavel. concatenado os valores... interpolando valores com template literals or template strings (alt + Z quebra de linha)

console.log(`O ${name} tem ${age} anos.`);

console.log("----------------------");

// Object
const pessoa = {
    name: 'jonh',
    age: 18,
    weight: 88.6,
    isAdmin: true
}

console.log(pessoa);

// pegar apenas uma propriedade nome do objeto.pripriedade(pessoa.name)
console.log(pessoa.name);
console.log(pessoa.age);
console.log(pessoa.isAdmin);
console.log(` ${pessoa.name} tem ${pessoa.age} anos`);

console.log("----------------------");

// arrays

const animals = [
    'Cat',
    'Monkey',
    'Lion',
    {   name: 'dog',
        age: 3
    }
]
// acessar valores dentro do array
console.log(animals);
console.log(animals[2]);
console.log(animals[3]);
console.log(animals[3].name);
console.log(animals.length);

console.log("----------------------");

// variavel undefined
let weight
console.log(weight);

console.log("----------------------");

let name3 = "allison" // string
let age3 = 33 // inteiro
let stars = 22.2 // float
let isSubscribed = true // boolean

console.log("----------------------");

let student = {
    name4: 'allison',
    age4: 33,
    weight: 58.2,
    isSubscribed: true
}
let john = {
    name4: 'jonh',
    age4: 55,
    weight: 66.2,
    isSubscribed: true
}
console.log(` ${student.name4} de idade ${student.age4} pesa ${student.weight} `);

console.log("----------------------");

let students = []

students = [
    student
]
console.log(students);

console.log(students[0]);

console.log("----------------------");

students[1] = john

console.log(students);
console.log(students[1]);

console.log("----------------------");

console.log(a); // valor de undefined pq js fez elevacao do a mas n o valor
var a = 1 

console.log(b); // erro de referencia.
let b = 1 