import { Container } from "./styles";

export function Nav() {
    return(
        <Container>
             <a id="logo" href="#">
                <img src="../../public/imagens/logo.png" alt="treine.me" />
            </a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Treinar</a></li>
            </ul>
        </Container>
    )
}