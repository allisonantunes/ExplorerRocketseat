const itens = document.querySelectorAll('.item')


// botao sem cor
itens.forEach((item) => {
    item.addEventListener('click', () => {
        const itemAtivo = document.querySelector('.ativo')
        if(itemAtivo) {
            itemAtivo.classList.remove('ativo')
        }
        item.classList.add('ativo')
    })
})