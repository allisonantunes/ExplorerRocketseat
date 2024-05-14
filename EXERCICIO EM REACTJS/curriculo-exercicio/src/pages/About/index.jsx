import {Header} from '../../components/Header';
import {Nav} from '../../components/Nav';


import { Container, Main} from './style';


export function About() {
    return (
        <Container>
           <Header />
           <Main>

            <h2>Sou alguem que gosta de desenvolver codigos e de desafios no <span>dia a dia!</span></h2>

            <p>Estou em Busca do meu primeiro emprego como desenvolvedor web FrontEnd. 
                Estou sempre aberto a novos conhecimentos, em busca de me aprofundar 
                cada vez mais nessa area tão ampla.
            </p>
           </Main>
           <Nav />
        </Container>
    )
}