// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

console.log("Hello World!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

const num1 = 2
const num2 = 2
console.log(num1 + num2)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

const isNumber = 1

if(isNumber === '') {
    console.log('nao é um numero')
}else {
    console.log('é um numero')

}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const isString = 'olá'

if(typeof isString) {
    console.log('É uma string')
}else {
    console.log('Não é uma string')

}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano"

const isBoolean = true
if(typeof isBoolean) {
    console.log("É um booleano")
}else {
    console.log( "Não é um booleano")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const num3 = 2
const num4 = 2
console.log(num1 - num2)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const num5 = 2
const num6 = 2
console.log(num1 * num2)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

const num7 = 2
const num8 = 2
console.log(num1 / num2)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. 
//    Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const par = 6
if(par % 2 == 0) {
    console.log("É um número par")
}else {
    console.log( "Não é um número par")
}


// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
//     Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const impar = 5
if(impar % 2 == 0) {
    console.log( "Não é um número ímpar")
}else {
    console.log("É um número ímpar")
}
