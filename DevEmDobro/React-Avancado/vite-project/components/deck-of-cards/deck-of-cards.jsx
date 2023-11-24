import { useState, useEffect } from "react"
import { Form } from "../form"

async function createDeck() {
    const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const deck = await response.json()
    return deck.deck_id
}
async function getCards(deckId) {
    const response = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    return await response.json()
}
const CardsList = (props) => {
    return (
        <ul>
                {
                props.cards.map((card, index) => {
                    return (
                        <li key={index}>
                            <img src={card.image} alt={card.value} />
                            <p>{card.value} {card.suit}</p>
                        </li>
                    )
                })
                }
        </ul>
    )
}

export const DeckOfCards = () => {
    // deck é a variavel, setdeck é a funcao que atualiza a variavel
    // o estado inicial está vazio.
    const [deck, setDeck] = useState({
        cards: []
    })
    useEffect(() => {
        // fetchData funcao para conseguir usar o async.
        const fetchData = async () => {
            const deckId = await createDeck()
            const data = await getCards(deckId)

            setDeck({
                cards: data.cards
            })
        }
        fetchData()
    }, []) // array vazio para carregar só uma vez

    const addCard = (newCard) => {
        setDeck({
            // criando o array novo, pegando o array antigo e add a nova carta.
            cards: [...deck.cards, newCard]
        })
    }
    
    // reenderização condicional
    // <Form addCard={addCard} /> para poder usar a funcao no componente Form
    return (
        <section>
            <Form addCard={addCard} />
            {deck.cards.length > 0 ? <CardsList cards={deck.cards} /> : 'nenhuma carta encontrada'}
        </section>
    )
}
