// função serve pra agrupamento de codigos e reutilizar codigos. dar sign com o nome da função ao bloco de cod

// função anonima - function anonymous
// function expression

const sum = function(number1, number2) {
// (number1, number2) parâmetros da função - parameters    
    console.log(number1 + number2);
    let total = number1 + number2
    console.log(total);
}

sum(2, 3) // passando argumentos - arguments (argumentos na funcao executada)

const soma = function(number1, number2) {
        total = number1 + number2
        return total
    }

    let number1 = 5
    let number2 = 6

    console.log(`o primeiro numero é: ${number1}`);
    console.log(`o segundo numero é: ${number2}`);
    console.log(`a soma dos dois numeros é: ${soma(number1, number2)}`);



// funcao é um liquidificador

function fazerSuco(fruta1, fruta2){ // vai fazer a mistura
    return 'suco de: '+ fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maça')
// oque eu quero colocar no liquidificador 
// e o copo onde vai ficara mistura depois de pronto

console.log(copo);
