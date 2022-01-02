import styled from "styled-components";
import {iInvertedColor} from '../interface';
export const Container = styled.div<iInvertedColor>`
    margin: 10px;
    display:flex;
    border:1px solid rgba(255,255,255,0.3);
    ${props => props.$inverted ? `background-color: ${props.theme.primary}` : ''}
`;

export const Image = styled.div`
width: 100px;
height: 100px;
img{
    display:block;
    width: 100%;
    height: auto;
}
`;

export const Left = styled.div`
background-color:rgba(0,0,0,0.09);
position:relative;
width: calc(100% - 116px);
padding:3px 8px 0;
display:flex;
flex-direction:column;
`;

export const Title = styled.h2<iInvertedColor>`
color: ${props => props.$inverted ? "#333" : "#fff"};
margin:0;
span{
    font-size: 0.7em;
}
`;

export const SubTitle = styled.h3<iInvertedColor>`
font-size:15px;
margin:0;
font-weight:normal;
color: ${props => props.$inverted ? "#444" : "#f1f1f1"};
span{
    display:inline-block;
    margin-right:5px;
}
`;

interface iIcons extends iInvertedColor{
    $fontSize?: string
}

export const Icons = styled.div<iIcons>`
font-size:${props => props.$fontSize || "24px"};
margin-top:6px;
color: ${props => props.$inverted ? "#444" : "#f1f1f1"};
svg{
    margin:0 7px;
    &:first-child{
        margin-left:0;
    }
}
`;

export const View = styled.a`
cursor:pointer;
position:absolute;
top:calc(50% - 10px);
right:1.5em;
svg{
    font-size:1.5em;
}
`;