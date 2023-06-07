let temperature = 36.5

if(temperature >= 37){
    console.log('está com febre')
} else if(temperature < 37.5 && temperature >= 37){
    console.log('febre moderada')
}
else{
    console.log("Saudavel")
}

let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature){
    console.log('está com febre')
} else if(mediumTemperature){
    console.log('febre moderada')
}
else{
    console.log("Saudavel")
}

let expression = 'a'

switch (expression) {
    case 'a':
        // cod
        break
    case 'b':
        // cod espressao b
        break
    default:
        break
}

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('nao implementado')
            break
    }
    return result
}

console.log(calculate(6, '+', 6))
console.log(calculate(6, '-', 6))
console.log(calculate(6, '/', 6))
console.log(calculate(6, '*', 6))

function sayMyName(name = '') {
    if(name === "") {
        throw new Error("nome obrigatorio") // deu erro ja para a funcao de ser executada
    }
    console.log(name);
}

try { // try tenta executar...
    sayMyName() // se colocar argumento aqui ja funciona normal
} catch (error) { // se der erro ai cai no catch
    console.log(error) // recebe o valor do THROW que vem da funcao
}

console.log('apos a funcao de erro')