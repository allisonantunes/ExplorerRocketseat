/* 
Solicitar o nome do aluno e as 3 notas do bimestre.
calcular a media daquele aluno
se o aluno passou no bimestre, dar os parabens.
se o aluno nao passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperacao.

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.


*/

let student = prompt('Digite seu nome: ')
let nota1 = prompt('Digite a nota do 1 bimestre: ')
let nota2 = prompt('Digite a nota do 2 bimestre: ')
let nota3 = prompt('Digite a nota do 3 bimestre: ')

let average = (Number(nota1) + Number(nota2) + Number(nota3)) / 3
average = average.toFixed(2)

if(average >= 7 && average <= 10){
    alert(`Parabens ${student}, vc passou com média ${average}`)
}else if(average > 10){
    alert(`Parabens ${student}, vc passou com média maxima!`)
}else{
    alert(`${student}, sua nota foi ${average}, mas dê o seu melhor na prova de recuperação!`)
}
