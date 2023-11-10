import { Container } from "./styles"

export function Card({children, color, showCardColor}) {
    return(
        <Container >
            <div 
            style={{backgroundColor: color}}
            onClick={() => showCardColor(color)}>
            {children}
            </div>
        </Container>
    )
}
Card.defaultProps = {
    color: 'red'
}

/* export function Card({title, props}) {
    return(
        <Container>
            <h1>{title}</h1>
            <p>texto do card</p>
        </Container>
    )
} */