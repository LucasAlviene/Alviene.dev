import Icon from './languages';
import type {languageAvailable} from './languages';
import styled from "styled-components";

const Container = styled.div`
    position:relative;
    margin-left: 30px;
    width: calc(100% - 30px);
    border: 1px solid rgba(200,200,200,0.3);
    background: #dedede;
    height:25px;
    margin-bottom:10px;
    border-radius:4px;
    svg{
        position:absolute;
        left: -30px;
        font-size: 1.563em;
        color: #333;
    }
`;

const Name = styled.b`
    color: #333;
    padding-left:2px;
`;


const Percentage = styled.span`
    position:absolute;
    top:0;
    bottom:0;
    left: 50%;
    z-index: 4;
    font-weight:bold;
    padding-top:3px;
`;
interface iValue{
    value: number | string
}
const Value = styled.div<iValue>`
    border-radius:4px;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    background-color: ${props => props.theme.primary};
    width: ${props => props.value}%;
    z-index:3;
`;
interface iProgressBar extends iValue{
    name: languageAvailable
}

const ProgressBar = ({value,name} : iProgressBar) => {
    return (
        <>
            <Container>
                <Icon name={name} />
                <Value value={value}>
                    <Percentage>{String(value)}%</Percentage>
                </Value>
            </Container>
        </>
    );

}

export default ProgressBar;