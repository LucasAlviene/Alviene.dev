import {useRef,useEffect} from 'react';
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import { Flex, Header, Grid, Column } from '../styles';
import {FaUnity, FaNodeJs, FaPhp, FaReact} from 'react-icons/fa';


import ProgressBar from '../components/progressbar';
import Icon from '../components/languages';

const Avatar = styled.img`
    display:block;
    width: 100%;
    height: auto;
    box-shadow:0 0 0 2px rgba(0,0,0,0.1);
    border-radius: 100%;
`;

const Name = styled.h4`
    color: #444;
    margin:0;
    font-size:25px;
`;

const Icons = styled.div`
    color: #fff;
    font-size:2rem;
    svg{
        color: #fff;
        position:absolute;
        padding: 5px;
        border-radius:100%;
    }
`;

const Description = styled.div`
    color: #444;
    margin: 8px 0;
    p{
        margin:0;
    }
`;
const AboutMe = () => {
    return (
        <Flex>
            <Header>Sobre Mim</Header>
            <Grid>
                <Column width={30}>
                    <div style={{width: 200,height: 200,margin:" 0 auto", position: "relative"}}>

                        <Avatar src="https://avatars.githubusercontent.com/u/54518010?v=4" />
                        <Icons>
                            <Icon name='unity' style={{top:-18,left: 78,backgroundColor: "#222c37"}} />
                            <Icon name='nodejs' style={{top:78,left: -18,backgroundColor: "#6cc24a"}} />
                            <Icon name='php' style={{top: 78,right: -18,backgroundColor: "#8892be"}}  />
                            <Icon name='reactjs' style={{bottom:-18,left: 78,backgroundColor:"#00d8ff"}} />
                            <FaUnity style={{top:-18,left: 78,backgroundColor: "#222c37"}} />
                            <FaNodeJs style={{top:78,left: -18,backgroundColor: "#6cc24a"}}  />
                            <FaPhp style={{top: 78,right: -18,backgroundColor: "#8892be"}} />
                            <FaReact style={{bottom:-18,left: 78,backgroundColor:"#00d8ff"}} />
                        </Icons>
                    </div>
                </Column>
                <Column width={70}>
                    <Name>Lucas Alviene</Name>
                    <Description>
                        <p>Olá, sou <b>Lucas Alviene</b> tenho 22 anos e sou desenvolvedor fullstack, atualmente estou estudando ciência da computação na Universidade Federal de Pelotas.</p>
                        <p>Trabalho autonomamente com PHP, MySQL, NodeJS e ReactJS, para projetos pessoais e profissionais, já trabalhei com React Native na criação do meu primeiro aplicativo e com Unity para uma materia da faculdade.</p>
                        <p>Meu foco é desenvolvimento backend com <b>PHP</b> e <b>NodeJS</b> e frontend com <b>ReactJS</b>, também pretendo estudar C# para criação de jogos eletrônicos utilizando a Unity.</p>
                    </Description>
                    <ProgressBar name='php' value='90' />
                    <ProgressBar name='reactjs' value='80' />
                    <ProgressBar name='nodejs' value='75' />
                    <ProgressBar name='unity' value='40' />
                </Column>
            </Grid>
        </Flex>
    )
}
export default AboutMe;