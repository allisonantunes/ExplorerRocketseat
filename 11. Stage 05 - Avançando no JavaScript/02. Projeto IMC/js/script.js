import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { notNumber, imc } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height)
    //se um dos 2 nao for numero retorna true.

    if(showAlertError){
        AlertError.open()
        return
    }

    const result = imc(weight, height)
    displayResultMessage(result)
}
function displayResultMessage(result) {
    Modal.message.innerText = `Seu IMC é de ${result}`
    Modal.open()
}
/* 
inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close() 
oninput toda vez que alterar algo ele aciona o evento.
*/
form.oninput = () => AlertError.close()