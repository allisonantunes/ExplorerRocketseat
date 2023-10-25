const setaCinza = document.querySelector('.icon-seta')
const setaCor = document.querySelector('.icone-seta-aberta')
const resposta = document.querySelector('.resposta')
// botao sem cor
setaCinza.addEventListener('click', () => {
    removeSetaCinza()
    addSetaCor()
    resposta.classList.add('mostrar-resp')

})
// botao com cor
setaCor.addEventListener('click', () => {
    setaCinza.classList.add('mostrar')
    setaCor.classList.remove('mostrar')

    resposta.classList.remove('mostrar-resp')
})

function removeSetaCinza(){
    setaCinza.classList.remove('mostrar')
}
function addSetaCor() {
    setaCor.classList.add('mostrar')
}