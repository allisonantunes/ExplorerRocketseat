/* 
** jogo de advinhação **

Apresente a mensagem ao usuario:
"Advinhe o número que estou pensando? Está entre 0 e 10"

Crie uma logica para gerar um numero aleatorio e 
verificar se o numero digitado é o mesmo que o aleatorio gerado pelo sistema.

Enquando (while) o usuario não advinhar o numero, mostrar a mensagem:
"Erro, tente novamente!"

Caso o usuario acerto o numero, apresentar a mensagem:
"Parabéns! voce advinhou o numero em x tentativas"

Substitua X da mensagem, pelo numero de tentativas

*/

let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")

let number = (Math.round(Math.random() * 10))
let tentativas = 1

while(number != result) {
    result = prompt("Erro, tente novamente!")
    tentativas++
}

if(number == 1){
    alert(`Parabéns! voce advinhou o numero ${result} em ${tentativas} tentativa`)
}else {
    alert(`Parabéns! voce advinhou o numero ${result} em ${tentativas} tentativas`)
}
