import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
    return (
        <Container>
            <Profile>
                <img scr='https://github.com/allisonantunes.png'
                alt='Foto do Usuario' />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Allison Thome</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
}