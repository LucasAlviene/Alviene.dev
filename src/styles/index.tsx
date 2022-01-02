import styled, {createGlobalStyle} from "styled-components";
import {iInvertedColor,iTheme, iColumn} from '../interface';
import { Link } from 'react-scroll';

export const Title = styled.h1`
  color: ${props => props.theme.textPrimary};
  margin: 0.2em 0 0;
  font-size:5em;
  text-align:center;
  text-shadow: 0 0 3px rgba(0,0,0,.3);
`;

export const GlobalStyle = createGlobalStyle<{ theme: iTheme }>`
html{
  scroll-behavior: smooth;
}
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
    margin:0;
    padding:0;
    border:0;
  }
  body.modal-open{
    overflow:hidden;
  }
`;

export const SubTitle = styled.h3`
font-size: 1.4em;
text-align:center;
margin:0;
font-weight:normal;
color: #f1f1f1;
`;

export const Center = styled.div`
display:flex;
align-items:center;
justify-content: center;
height: 100%;
`;


export const Header = styled.h2`
  color: ${props => props.theme.primary};
  text-align:center;
  font-size: 3.2em;
`;

export const Continue = styled(Link)<iInvertedColor>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  margin-bottom: 0.8em;
  cursor:pointer;

  svg{
    color: ${props => props.$inverted ? "#444" : "#f1f1f1"};
  }
`;

export const Flex = styled.div`
  height: calc(100% - 1.5em);
  margin-bottom:1.5em;
`;

export const Grid = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction: row;
    margin: -1rem;
`;
export const Column = styled.div<iColumn>`
    position:relative;
    width: ${props => props.width ?? 50}%;
`;

export const Footer = styled.footer`
  display:flex;
  background: #ddd;
  padding:8px;
  justify-content: center;
  color: #777;
  span{
    padding-right:10px;
    margin-right:10px;
    border-right: 1px solid #bbb;
    a{
      color: ${props => props.theme.primary};
      text-decoration:none;
      &:hover{
        text-decoration:underline;
      }
    }
    svg{
      vertical-align: text-bottom;
      color: ${props => props.theme.primary};
    }
    &:last-child{
      margin-right:0;
      border-right:0;
    }
  }
`;