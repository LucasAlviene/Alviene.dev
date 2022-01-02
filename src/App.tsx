import { useState } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import ReactTooltip from 'react-tooltip';
import { FaChevronDown, FaGithub, FaHeart } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';

import themeConfig from './theme.json';
import { Continue, GlobalStyle, Header, Flex, Footer } from './styles';

import './components/firebase';
import Container from './components/container';
import Modal from './components/modal';

import Main from './view/main';
import AboutMe from './view/aboutme';
import MyJobs from './view/myjobs';

import wallpaper from './images/wallpaper.jpg';

import { iJobProps } from './interface';


moment.updateLocale('pt-br', {
  months: [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ]
});
//<Menu>Inicio Sobre Projetos etc</Menu>
// https://colorhunt.co/palette/1a1a2e16213e0f3460e94560
function App() {

  const [modalItem, setModalItem] = useState<iJobProps | null>(null);


  const openModal = (item: iJobProps) => () => {
    document.querySelector("body")?.classList.add("modal-open");
    setModalItem(item);
  }
  const closeModal = () => {
    document.querySelector("body")?.classList.remove("modal-open");
    setModalItem(null);
  }


  return (
    <ThemeProvider theme={themeConfig}>
      {modalItem && <Modal {...modalItem} onClose={closeModal} />}

      <GlobalStyle />
      <ReactTooltip effect='solid' place='top' />
      <Container id="main" backgroundImage={wallpaper}>
        <Main />
        <Continue data-tip="Continuar" to="aboutme" spy={true} smooth={true} duration={100}><FaChevronDown /></Continue>
      </Container>
      <Container id="aboutme" background="#f1f1f1">
        <AboutMe />
        <Continue $inverted data-tip="Continuar" to="myjobs" spy={true} smooth={true} duration={100}><FaChevronDown /></Continue>
      </Container>
      <Container id="myjobs">
        <MyJobs openModal={openModal} closeModal={closeModal} />
        <Continue data-tip="Continuar" to="contact" spy={true} smooth={true} duration={100}><FaChevronDown /></Continue>
      </Container>
      <Container id="contact" background="#f1f1f1">
        <Flex>
          <Header>Contato</Header>
        </Flex>
      </Container>
      <Footer>
        <span><a href='https://wallhere.com/pt/wallpaper/1590161' target='_blank'>Créditos do Wallpaper</a></span>
        <span>Desenvolvimento por mim <FaHeart /></span>
        <span>Projeto no <a href='https://github.com/LucasAlviene/Alviene.dev' target='_blank' ><FaGithub /> Github</a></span>
      </Footer>
    </ThemeProvider>
  );
}

export default App;

/*

1º 
https://c.wallhere.com/photos/3f/19/futuristic_cityscape_science_fiction-1590161.jpg!d"
#E94560
//https://wallhere.com/pt/wallpaper/1590161

2º 
https://wallpapercave.com/wp/wp4860289.jpg
#364bc3

*/