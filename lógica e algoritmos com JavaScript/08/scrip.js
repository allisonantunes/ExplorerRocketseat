/* 

Crie uma lista de pacientes

cada paciente deverá conter
    nome
    idade
    peso
    altura

escreva uma lista contendo o nome dos pacientes

*/

let lista = []

const pacientes = [
    {
    nome: 'alison',
    idade: 22,
    cidade: 'tubarao'    
    },
    {
        nome: 'hat',
        idade: 22,
        cidade: 'tubarao'    
    },
    {
    nome: 'jo',
    idade: 22,
    cidade: 'tubarao'    
    },
]

for (const paci of pacientes) {
    lista.push(paci.nome)
    // pego a variavel de lista e coloco o metodo puhs para adcionar um item a variavel.
    // objeto pacientes, cada um vai para o paci criado.
}

alert(lista)