import { Container, Main } from './styles'
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/footer'

// reaproveitamento de estrutura 
import { Outlet } from 'react-router-dom'

export function Home() {
  return(
    <Container>
      <Nav />

      <Main>
            <section>
                <h1>Treinos <span>exclusivos</span> para você!</h1>
                <p> Nós criamos treinos <strong>exclusivos e únicos para você</strong>.
                    <br/>
                    Invista no seu corpo e <strong>tenha muito mais perfomance</strong> e quanlidade de vida.
                </p>
                <button>
                    <img src="../public/imagens/icone.png" alt="ícone do whatsapp" />
                    Comece já
                </button>
            </section>
            <img src="../public/imagens/treino.png" alt="Desenho de uma moça pulando corda" />
        </Main>
        < Outlet />
      <Footer />
    </Container>
  )
}