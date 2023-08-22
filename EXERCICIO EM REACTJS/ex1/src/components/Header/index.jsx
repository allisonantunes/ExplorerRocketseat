import { Container } from "./styles";

export function Header() {
    return(
        <Container>
                <h1><span>Y</span>oulakou</h1>
                <img src="https://img.freepik.com/vetores-premium/ilustracao-de-avatar-de-estudante-icone-de-perfil-de-usuario-avatar-de-jovem_118339-4402.jpg?w=2000" alt="" />
                <h2>Based in casablanca</h2>
                <p>Junior Frontend Developer,
                   <br/>UI/UX Desingner</p>

                <a href="#">
                    <img src="../../public/1.svg" alt="" />
                </a>
                <a href="#">
                    <img src="../../public/2.svg" alt="" />
                </a>
                <a href="#">
                    <img src="../../public/3.svg" alt="" />
                </a>

                <button>
                    HIRE ME!
                </button>
        </Container>
    )
}