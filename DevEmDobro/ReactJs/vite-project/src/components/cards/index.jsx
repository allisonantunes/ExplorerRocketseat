import { Card } from "../card"

export function Cards() {
    return (
        <div>
            <h2>Meus cards</h2>
            <div>
            <Card>
                <h3>titulo card 1</h3>
                <p>esse é um texto do card</p>
            </Card>

            <Card>
                <h3>titulo card 2</h3>
                <p>esse é um texto do card</p>
            </Card>

            <Card>
                <h3>titulo card 2</h3>
                <p>esse é um texto do card</p>
            </Card>
            </div>
        </div>
    )
}