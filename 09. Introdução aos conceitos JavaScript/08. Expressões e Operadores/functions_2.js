let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'Café top' : 'Café'
// se pao E queijo ENTAO cafe top SE NAO 'Café'
// && para as 2 true

console.log(niceBreakfast);

const niceBreakfast1 = pao || queijo ? 'Café top' : 'Café'
// se pao ou queijo ENTAO cafe top SE NAO 'Café'
// || para apenas uma true

console.log(niceBreakfast1);

let age = 16

const carDrive = age >= 18 ? 'can drive' : "can't drive"
// se idade for maior ou igual a 18. 


console.log(false == 0) // true
console.log(true == 1) // true

console.log(10 > 5 > 1) // false pq 10 > 5 true e true > 1 false

let one = 1 
let two = 2

// diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != '1')

// estritamente diferente

console.log(two !== "2")
console.log(two !== 2)

// estritamente igual

console.log(one === "1")
console.log(one === 1)
