import { createGlobalStyle } from 'styled-components';
import * as colors from './assets/colors';
import hackRegular from './assets/font/CircularStd-Book.woff2';
import hackBold from './assets/font/CircularStd-Bold.woff2';
import mediumCircular from './assets/font/CircularStd-Medium.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Circular';
    src: url(${hackRegular}) format('woff');
    font-weight: 100;
  }

  @font-face {
    font-family: 'Circular';
    src: url(${hackBold}) format('woff');
    font-weight: bold;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Circular';
  }

  #root {
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    grid-auto-rows: auto;
    column-gap: 10px;


    footer {
      grid-column: 1 / 4;
      grid-row: 7 / 8;
      padding: 50px;
      background-color: ${colors.SHADOW_COLOR};
      height: 300px;

      color: white;
    }
  }
`;

export default GlobalStyle;
