import {Header} from '../../components/Header';
import {Nav} from '../../components/Nav';


import { Container, Main} from './style';


export function Specializations() {
    return (
        <Container>
           <Header />
            <Main>

            <h2>Minhas <span>Expecializações</span></h2>
            <div>
                <ul>
                    <li>
                        <h3>FrontEnd Developer</h3>
                        <p>
                            Front-end é onde eu teço código e criatividade para moldar
                            experiências digitais cativantes e centradas no usuário.
                        </p>
                    </li>
                    <li>
                        <h3>BackEnd Developer</h3>
                        <p>Back End não é meu foco, portanto faço apenas
                            um simples crud com o banco de dados.    
                        </p>
                    </li>

                </ul>
            </div>
            </Main>

           <Nav />
        </Container>
    )
}