import {Container, Links, Content} from "./style.js"

import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Button } from "../../components/Button/"
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";

export function Details() {

  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir a nota"/>
            <h1>Introdução ao react</h1>
            <p>Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Accusantium modi officia
                maiores! Qui quam delectus labore,
                reprehenderit ut sapiente ipsum eveniet
                nam repellat iure molestiae sunt repudiandae
                magnam veniam ab.</p>
            <Section title="Links úteis">
              <Links>
                <li><a href="#">www.google.com</a></li>
                <li><a href="#">www.facebook.com</a></li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Tag title="express" />
              <Tag title="nodeJs" />
            </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}