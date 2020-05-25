import styled from "styled-components";

export const ButtonContainer = styled.button`
/* border-radius: var(--border-radius); */
/* background: var(--primary-color); */

background:none;
/* padding-left: 1.5rem; */
font-family: 'Righteous', cursive;
border:0;
padding:0;
padding-right:1.5rem;
font-size:1.2rem;
/* position: absolute; */
color:var(--primary-color);    
text-shadow: -1px -1px 1px white;
outline: none;
}
&:hover{
/* background:black; */
color:white;
text-shadow: -1px -1px 1px black;
}
`
