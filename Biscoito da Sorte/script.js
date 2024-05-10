const mensagens = [
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'A vida trará coisas boas se tiver paciência.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
]

function openBiscoito() {
    
    const randomIndex =  Math.floor(Math.random() * mensagens.length);
    const randomElement = mensagens[randomIndex];

    const img = document.querySelector("#image")
    img.setAttribute('src', 'images/aberto-cookie.svg')
    img.classList.remove('vibrar')
    
    document.getElementById('title').innerHTML = '<h1>Aqui está a sua sorte de hoje:<h1>'
    document.getElementById('biscoito').innerHTML = `<p>${randomElement}</p>`
    document.getElementById('button').style.display = 'inline'
    document.getElementById('container').style.height = '564px'
}
function reset() {
    location.reload()
}