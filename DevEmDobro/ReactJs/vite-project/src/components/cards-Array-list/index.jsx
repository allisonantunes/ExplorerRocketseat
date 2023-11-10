import { Card } from "../card"

const cardsTitle = ['titulo card 1', 'titulo card 2']

const showCardColor = (color) => {
    console.log(color);
}

export function Cards() {
    return (
        <div>
            <h2>Meus cards</h2>
            <div>
                {
                    cardsTitle.map((card, index) => {
                            return (
                            <Card key={index} showCardColor={showCardColor}>
                                <h3>{card}</h3>
                                <p>esse é o texto card 1</p>
                            </Card>)
                        })
                }
                            <Card color='blue' showCardColor={showCardColor}>
                            <h3>card fundo azul</h3>
                            <p>esse é o texto card 1</p>
                            </Card>
            </div>
        </div>
    )
}
