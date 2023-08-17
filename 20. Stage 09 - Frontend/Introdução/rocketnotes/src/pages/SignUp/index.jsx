import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { FiMail, FiLock, FiUser} from 'react-icons/fi';

import { Background, Container, Form } from "./styles";

export function SignUp() {
    return(
        <Container>
            <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicativo para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>
                <Input 
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                />
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
                <Button title='Cadastrar' />

                <Link to='/'>Voltar para o login</Link>

            </Form>
        </Container>
    )
}