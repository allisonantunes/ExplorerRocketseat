
const btnTentar = document.querySelector("#btnTentar")
const btnNovamente = document.querySelector("#btnNovamente")

const tela1 = document.querySelector(".tela1")
const tela2 = document.querySelector(".tela2")

let aleatorio = (Math.round(Math.random() * 10))
let tentativas = 1

function tentar(event) {
    event.preventDefault()
    const number = document.querySelector("#number")
    if(number.value == aleatorio) {
        trocar()
        tela2.querySelector('h2').innerText = `Acertou em ${tentativas} vezes`
    }
    number.value = ''
    tentativas++
}
function jogarNov() {
    trocar()
    aleatorio = (Math.round(Math.random() * 10))
    tentativas = 1
}
function trocar() {
    tela1.classList.toggle("escondido")
    tela2.classList.toggle("escondido")
}

btnTentar.addEventListener('click', tentar)
btnNovamente.addEventListener('click', jogarNov)