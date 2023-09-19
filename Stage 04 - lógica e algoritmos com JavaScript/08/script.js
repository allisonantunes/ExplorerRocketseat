/* 

Crie uma lista de pacientes

cada paciente deverá conter
    nome
    idade
    peso
    altura

escreva uma lista contendo o nome dos pacientes

*/

const patients = [
    {
    name: 'Luiz',
    age: 20,
    weight: 100,
    height: 190,
    },
    {
        name: 'Luiz',
        age: 20,
        weight: 100,
        height: 190,
    },
    {
        name: 'Luiz',
        age: 20,
        weight: 100,
        height: 190,
    }
]
let patientsName = []

/* for(i = 0; i < patients.length; i++) {
    patientsName[i] = patients[i].name
} */

for(let patient of patients) { // para um paciente de pacientes... faz algo 
    patientsName.push(patient.name)
}

// alert(patients[0].name)
alert(patientsName)


function Patients(nome, idade, peso, altura) {
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
} 


const allison = new Patients('allison', 22, 66, 1.70)

console.log(allison)