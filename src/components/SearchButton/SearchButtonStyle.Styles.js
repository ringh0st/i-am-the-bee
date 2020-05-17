import { createGlobalStyle } from "styled-components";
import { Normalize } from 'styled-normalize'


export const SearchButtonStyle = createGlobalStyle`
  ${Normalize}
  .search-form {
    // width:14vw;
    border-radius: var(--border-radius);
    background: black;
    // opacity:0.5;
    padding-left: 1.5rem;
    font-family: 'Righteous', cursive;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    }
  .search-button{
    // height:1rem;
    background-color:transparent;
    border:0;
    color:var(--primary-color);
    font-size:1rem;
    
  }
  .fa-search{
    color:white;
    padding-right:0.5rem;
    font-size:1rem;
  }
  
`