import styled from 'styled-components'
import db from './db.json';
import Widget from '../src/components/Widget/index'
import QuizBackground from '../src/components/QuizBackground/index'
import Footer from '../src/components/Footer/index'
import GiHubCorner from '../src/components/GiHubCorner/index'




//const BackgroundImage = styled.div`
//background-image: url(${db.bg});
//flex: 1;
//background-size: cover;
//background-position: center;
//`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Você que é fã da série VIKINGS, vamos jogar</h1>
          </Widget.Header>
          <Widget.Content>

            <p>
              Os vikings são uma antiga civilização originária da região da Escandinávia,
              que nos dias atuais compreende o território de três países europeus: a Suécia,
              a Dinamarca e a Noruega. O apogeu da civilização viking ocorreu entre os séculos VIII e XI.
          </p>

          </Widget.Content>

        </Widget>

        <Widget>
          <Widget.Content>
            <h1>VIKINGS-QUIZ</h1>
            <p>Vamos testar seus conhecimentos sobre histórias, costumes, armas, personagens
            e outras coisas sobre esta série</p>
          </Widget.Content>

        </Widget>
        <Footer />
      </QuizContainer>
      <GiHubCorner projectUrl="http://github.com/ardileslima" />

    </QuizBackground>
  );
}
