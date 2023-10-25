const imagens = document.querySelectorAll('.slide')
const setaVoltar = document.getElementById('seta-voltar')
const setaAvancar = document.getElementById('seta-avancar')

let imagemAtual = 0

setaAvancar.addEventListener('click', () => {
    if(imagemAtual === imagens.length -1) {
        return
    }
    esconderImg()
    imagemAtual++
    imagens[imagemAtual].classList.add('mostrar')

    setasOpacidade()
})
setaVoltar.addEventListener('click', () => {
    if(imagemAtual === 0) {
        return
    }
    esconderImg()
    imagemAtual--
    imagens[imagemAtual].classList.add('mostrar')

    setasOpacidade()
})

function esconderImg() {
    const imagemAberta = document.querySelector('.mostrar')
    imagemAberta.classList.remove('mostrar')
}
function setasOpacidade() {
    const naoEhPrimeiraImg = imagemAtual !== 0
    if(naoEhPrimeiraImg) {
        setaVoltar.classList.remove('opacidade')
    } else {
        setaVoltar.classList.add('opacidade')
    }

    const finalImg = imagemAtual !== 0 && imagemAtual === imagens.length -1
    if(finalImg) {
        setaAvancar.classList.add('opacidade')
    } else {
        setaAvancar.classList.remove('opacidade')
    }
}