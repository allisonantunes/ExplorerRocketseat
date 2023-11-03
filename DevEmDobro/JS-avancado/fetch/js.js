const button = document.getElementById('tirar-carta')
button.addEventListener('click', () => {
    tirarUmaCartaAleatoria()
})

async function criarBaralhoEmbaralhado() {
    const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    const resposta = await fetch(url)
    return await resposta.json()
}
async function tirarUmaCarta(deck_id) {
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`
    const resposta = await fetch(url)
    return await resposta.json()
}
async function tirarUmaCartaAleatoria() {
    const baralho = await criarBaralhoEmbaralhado()
    const deck_id = baralho.deck_id
    const carta = await tirarUmaCarta(deck_id)

    const imgCarta = carta.cards[0].image
    document.getElementById('img-carta').src = imgCarta

}
tirarUmaCartaAleatoria()