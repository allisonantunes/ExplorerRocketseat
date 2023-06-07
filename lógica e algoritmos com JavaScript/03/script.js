/* 

Capturar 2 números,
fazer as operaçoes matematicas de
soma, subtração, multiplicação, divisão e resto da divisão.

E para cada operação, mostrar um alerta com o resultado.

*/

let numberOne = prompt('digite o primeiro numero: ')
let numberTwo = prompt('digite o segundo numero: ')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo

alert(`Soma: ${sum}`)
alert(`Subração: ${sub}`)
alert(`Multiplicação: ${mult}`)
alert(`Divisão: ${div}`)
alert(`Resto da divisão: ${restDiv}`)
