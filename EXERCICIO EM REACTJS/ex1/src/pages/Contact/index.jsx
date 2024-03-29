import {Header} from '../../components/Header';
import {Nav} from '../../components/Nav';

import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'

import { Container, Main} from './style';


export function Contact() {
    return (
        <Container>
           <Header />
           <Main>
            <h2>Fale <span>Comigo</span></h2>
            <p>Vamos entrar em contato!</p>
                <div className='title'>
                <AiOutlineWhatsApp />
                <h3>Celular</h3>
                </div>
                <div className='line'></div>
                <p>48 9 9697-0393</p>
                
                <div className='title'>
                <AiOutlineMail />
                <h3>Email</h3>
                </div>
                <div className='line'></div>
                <p>allisonabc@hotmail.com</p>
           </Main>
           <Nav />
        </Container>
    )
}