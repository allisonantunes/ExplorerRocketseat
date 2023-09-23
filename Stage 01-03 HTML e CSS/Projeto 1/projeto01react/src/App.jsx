import { Container, Footer, Hero } from './styles'

export default function App() {
  return(
    <Container>

    <Hero>
      <img src="../public/func.png" alt="Pessoa trabalhando" />
      
      <h1>Ambientes <span>únicos</span> para você!</h1>
      <p>Nós criamos ambientes <strong>exclusívos</strong> e <strong>únicos</strong>, com muito bom gosto e profissionalismo, investimos tempo e <span>dedicação no seu projeto.</span></p>
      <br/>
      <p>Tenha <span>ambientes limpos</span> e bem decorados, transmitindo <strong>elegância e finesse</strong> para todo aquele que estiver ali.</p>

    </Hero>
      <Footer>
        <a target="_blank" href="http://instagram.com">Instagram</a>
        <a href="mailto:contato@moveis">Fale Conosco</a>
      </Footer>
      <img id='balls' src="../public/bolinha.png" alt="bolinhas" />
    </Container>
  )
}