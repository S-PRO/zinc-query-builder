import { createGlobalStyle } from 'styled-components';
import * as colors from './colors';

export const GlobalStyle = createGlobalStyle`
  div#__next, html, body {
    margin: 0;
    height: 100%;
    width: 100%;     
  }

  body {
    color: ${colors.mainBlack};
    background-color: ${colors.background};
    font-family: sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;
