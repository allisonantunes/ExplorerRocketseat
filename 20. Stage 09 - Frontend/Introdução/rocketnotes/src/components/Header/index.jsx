import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from '../../assets/usuario.jpg'
import { api } from '../../services/api'


export function Header() {
    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return (
        <Container>
            <Profile to='/profile'>
                <img 
                src={avatarUrl}
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