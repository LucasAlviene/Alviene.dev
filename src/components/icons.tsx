import styled from "styled-components";
import { FaGithub, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';
const IconsCss = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
margin-bottom: 2em;
a{
  color: #fff;
  font-size:28px;
  padding:0 8px;
  &:hover{
    color: #dedede;
  }
}
`;

const Icons = () => {
    return (
        <>
            <IconsCss>
                <a data-tip="Github" rel="noreferrer" target="_blank" href="https://github.com/LucasAlviene"><FaGithub /></a>
                <a data-tip="Twitter" rel="noreferrer" target="_blank" href="https://twitter.com/lucasalp1"><FaTwitter /></a>
                <a data-tip="E-mail" rel="noreferrer" target="_blank" href="mailto:oi@alviene.dev"><FaEnvelope /></a>
                <a data-tip="Linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/lucas-alviene-pereira/"><FaLinkedin /></a>
            </IconsCss>
        </>
    )
}

export default Icons;
