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

const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

// enquanto o resultado for diferente de randomNumber faz o alert
while (Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente!")
    xAttempts++
}
if(randomNumber == 1){
    alert(`Parabéns! o numero que eu pensei foi ${randomNumber} e voce advinhou o numero em ${xAttempts} tentativa`)
}else {
    alert(`Parabéns! o numero que eu pensei foi ${randomNumber} e voce advinhou o numero em ${xAttempts} tentativas`)
}
