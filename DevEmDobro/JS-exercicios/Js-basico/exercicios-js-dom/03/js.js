formulario = document.querySelectorAll('form')

function formEnviar() {
    nome = document.querySelector("input[name='nome']")
    email = document.querySelector("input[name='email']")
    telefone = document.querySelector("input[name='telefone']")
    mensagem = document.querySelector("input[name='mensagem']")

    nomeP = document.querySelector('.nome')
    emailP = document.querySelector('.email')
    telefoneP = document.querySelector('.telefone')
    mensagemP = document.querySelector('.mensagem')

    
    if(!nome.value) {
        nome.style.borderColor = '#F52E2E'
        nomeP.classList.add('spanP')
    } else {
        nome.style.borderColor = '#00C22B'
    }
    if(!email.value) {
        email.style.borderColor = '#F52E2E'
        emailP.classList.add('spanP')

    } else {
        email.style.borderColor = '#00C22B'
    }
    if(!telefone.value) {
        telefone.style.borderColor = '#F52E2E'
        telefoneP.classList.add('spanP')

    } else {
        telefone.style.borderColor = '#00C22B'
    }
/*     if(!mensagem) {
        mensagem.style.borderColor = '#F52E2E'
    } else {
        console.log('certo');
    } */


}
