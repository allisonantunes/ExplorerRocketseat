import {Header} from '../../components/Header';
import {Nav} from '../../components/Nav';


import { Container, Main} from './style';


export function Experience() {
    return (
        <Container>
           <Header />
            <Main>

            <h2>Educação & <span>Experiencia</span></h2>
            <div>
                <ul>
                    <li>
                        <h3>Análise e Desenv. de Sistemas - UNIASSELVI</h3>
                        <p>Cursando 2021 - 2024</p>
                    </li>
                    <li>
                        <h3>Programa de Formação Explorer - Rocketseat</h3>
                        <p>Cursando 2023</p>
                    </li>
                    <li>
                        <h3>Conhecimento em HTML, CSS e JS</h3>
                        <p>Minis Cursos udemy</p>
                    </li>
                    <li>
                        <h3>Conhecimento em ReactJs, TypeScrit e NodeJs</h3>
                        <p>Minis Cursos udemy</p>
                    </li>

                </ul>
            </div>
            </Main>

           <Nav />
        </Container>
    )
}