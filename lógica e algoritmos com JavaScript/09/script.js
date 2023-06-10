/* 

Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

`paciente ${x} possui o IMC de: ${Y}`

onde X é o nome do paciente e y é o imc desse paciente

crie uma função para fazer o calculo de IMC

peso / (altura * altura)

como a altura ta 190 tem que colocar em metros dividindo por 100
(altura * altura) / 100
ToFixed(2)
*/

const patients = [
    {
    name: 'Luiz',
    age: 20,
    weight: 100, // peso
    height: 190, // altura
    },
    {
        name: 'jo',
        age: 20,
        weight: 80,
        height: 170,
    },
    {
        name: 'ju',
        age: 20,
        weight: 100,
        height: 180,
    }
]
/* 
function imcf(weight, height) {
    return (weight / (height / 100) ** 2).toFixed(2)
}
function imc(pacient) {

    return `paciente ${pacient.name} possui o IMC de: ${imcf(pacient.weight, pacient.height)}`
}
*/

function imc(pacient) {
/*  
    let result = pacient.weight / (pacient.height / 100) ** 2
    result = result.toFixed(2)
    return `paciente ${pacient.name} possui o IMC de: ${result}`
    
*/
    return `paciente ${pacient.name} possui o IMC de: ${(pacient.weight / (pacient.height / 100) ** 2).toFixed(2)}`
}

for (let pacient of patients) {
    let IMCmessage = imc(pacient)
    alert(IMCmessage)
}

