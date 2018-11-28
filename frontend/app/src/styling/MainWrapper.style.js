import styled from 'styled-components';
import { Github } from 'styled-icons/fa-brands/Github';

const Div = styled.div`

  top: 10vh;
  /* left: ${props => ((props.width) / window.screen.width) * 30}vw ; */
  width: 35em;
  margin-bottom: 3em;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  -webkit-user-select: none;   
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* @media screen and ( max-width: 768px ) {
    left: 15vw;
  }
  
  @media screen and ( max-width: 600px ) {
    left: 10vw;
  }

  @media screen and ( max-width: 425px ) {
    left: 1vw;
    width: auto;
  } */

`;


export default Div;

export const GithubIcon = styled(Github)`
  color: #f7f7f7;
  width: auto;
  height: 2.5em;
`;