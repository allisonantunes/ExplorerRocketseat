import { Container } from "./styles";

export function Header() {
    return(
        <Container>
                <h1><span>A</span>llison</h1>
                <img src="https://img.freepik.com/vetores-premium/ilustracao-de-avatar-de-estudante-icone-de-perfil-de-usuario-avatar-de-jovem_118339-4402.jpg?w=2000" alt="" />
                <h2>Based in casablanca</h2>
                <p>Junior Frontend Developer
                   <br/>and Backend</p>

                <a href="https://www.linkedin.com/in/allison-antunes-16b227226/" target="_blank">
                    <img src="../../public/1.svg" alt="" />
                </a>
                <a href="#" target="_blank">
                    <img src="../../public/2.svg" alt="" />
                </a>
                <a href="https://www.facebook.com/allison.antunes.73" target="_blank">
                    <img src="../../public/3.svg" alt="" />
                </a>

                <button>
                    HIRE ME!
                </button>
        </Container>
    )
}