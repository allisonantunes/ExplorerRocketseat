// estrutura de repetição FOR

// i = 0, se i < 10 executa o cod e depois o i++
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("_________________________________");

for (let i = 60; i > 0; i--) {
    if(i === 50) {
        break
    } // com o break o lup vai parar no 50... para a execução do loop
    console.log(i);
}

for (let i = 10; i > 0; i--) {
    if(i === 5) {
        break
    } // com o continue o lup vai pular o 5... pula a execução do momento
    console.log(i);
}

console.log("_________________________________");

// while ( em quanto ) quando nao sabe o momento da parada se usa o while

let num = 0

while(i < 10) {
    console.log(i)

    i++
}

console.log("_________________________________");
