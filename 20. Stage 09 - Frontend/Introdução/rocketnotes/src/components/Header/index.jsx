import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from '../../hooks/auth'

export function Header() {
    const { signOut } = useAuth()
    return (
        <Container>
            <Profile to='/profile'>
                <img scr='https://github.com/allisonantunes.png'
                alt='Foto do Usuario' />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Allison Thome</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
}