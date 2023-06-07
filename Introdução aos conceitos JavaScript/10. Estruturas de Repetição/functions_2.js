// for...of

let name = 'allison'
let names = ["joao", 'paulo', 'pedro']

for(let char of name) {
    console.log(char);
}

console.log('-------');

for(let name of names) {
    console.log(name);
}

console.log('-------');

// for...in

let person = {
    name: 'john',
    age: 33,
    weight: 80
}

// pega a propriedade do objeto e atribui na variavel property
for(let property in person) {
    console.log(property)
    
}

console.log('-------');

for(let property in person) {
    
    console.log(person[property])
}
console.log('-------');