import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiMail, FiLock} from 'react-icons/fi';

import { Background, Container, Form } from "./styles";

export function SignIn() {
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicativo para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>
                <Input 
                    placeholder='e-mail'
                    type='text'
                    icon={FiMail}
                />
                    <Input 
                    placeholder='Senha'
                    type='password'
                    icon={FiLock}
                />
                <Button title='Entrar' />

                <a href="#">Criar conta</a>

            </Form>
            <Background />
        </Container>
    )
}