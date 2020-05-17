import { createGlobalStyle } from "styled-components";
import { Normalize } from 'styled-normalize'


export const GlobalStyle = createGlobalStyle`
  ${Normalize}
  body {
    box-sizing: border-box;
    background-color: var(--background-color);
    min-height:100vh;
    font-size:62.5%;

  }
`

