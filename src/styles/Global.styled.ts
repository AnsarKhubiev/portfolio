import {createGlobalStyle} from "styled-components";
import {theme} from "./theme";
import {font} from "./Common";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${theme.colors.primaryBg};
    margin: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.paragraphFont};
    line-height: 1.2;
  }

  h2 + p {
    max-width: 438px;
    text-align: center;
    margin: 0 auto 50px;
    ${font({lineHeight: 1.6, textTransform:'capitalize', Fmax:15, Fmin:15})};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
  }
`