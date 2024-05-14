import {Header} from '../../components/Header';
import {Nav} from '../../components/Nav';
import {Main} from '../../components/main';

import { Container} from './style';

export function Home() {
    return (
        <Container>
           <Header />
            <Main />
           <Nav />
        </Container>
    )
}