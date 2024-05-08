var result

function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var operator = document.querySelector('#operador').value

    switch (operator) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case '%':
            result = num1 % num2
            break
        case '/':
            if (num2 === 0) {
                result = "Não é possível dividir por zero"
            } else {
                result = num1 / num2
            }
            break
        default:
            result = "Operador inválido"
    }

    if(result % 2 === 0) {
        return document.getElementById('result').innerHTML = "Resultado: " + result + " esse numero é par"
    }
/*     if (num1 === num2) {
        return document.getElementById('result').innerHTML += `Os números inseridos ${num1} e ${num2} são iguais, o resultado é : ${result}`
    } */
    else {
        document.getElementById('result').innerHTML = "Resultado: " + result
    }
}

function limpar() {
    result = 0

    document.getElementById('result').innerHTML = "Resultado: " + result
}