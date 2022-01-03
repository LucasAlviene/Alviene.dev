import { rgba } from 'polished';
import styled, { css, keyframes } from 'styled-components';
import ITheme from '../interface/itheme';

const breatheAnimation = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
`;
/*
 0% { background:linear-gradient(0deg, rgba(233,69,96,0.2), rgb(233 69 96 / 40%)) }
 100% {  background:linear-gradient(360deg, rgba(233,69,96,0.2), rgb(233 69 96 / 40%)) }

*/
const ContainerFull = styled.section<iContainer>`
display: flex;
  position: relative;
  color: ${props => props.color ?? props.theme.textPrimary};
  min-height: calc(100vh + 0.4px);
  z-index:2;
  width: 100%;
  ${props => props.backgroundImage && `
  background: url(${props.backgroundImage});
  background-size: cover;
  background-attachment: fixed;
    &:before{
      content: '';
      /*background-color: ${rgba(props.background || props.theme.primary, 0.20)};*/
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      z-index:-1;
    }
    ` || `background-color: ${props.background || props.theme.primary};`}
    &:before{
      background: linear-gradient(-45deg, rgba(233,69,96,0.2), rgba(233,69,96,0.3),rgba(233,69,96,0.25));
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      height: 100%;
      animation: ${(props) => css`${breatheAnimation} 15s ease infinite;`};
    }
  `;

const ContainerWidth = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
  `;

interface iContainer extends ITheme {
  style?: any
  children?: any
  backgroundColor?: string
  backgroundImage?: string
  id?: string
}

const Container = ({ children, ...props }: iContainer) => {
  return (
    <ContainerFull {...props}>
      <ContainerWidth>

        {children}

      </ContainerWidth>
    </ContainerFull>
  )
}

export default Container
export {ContainerWidth}