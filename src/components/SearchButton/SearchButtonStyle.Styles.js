import styled from 'styled-components'

export const SearchContainer = styled.div`
border-radius: var(--border-radius);
background: ${p=>p.primary ? 'black' : 'white'};
padding-left: 1.5rem;
font-family: 'Righteous', cursive;
padding-top: 0.75rem;
padding-bottom: 0.75rem;
}
&:hover{
background:#272727;
}
`
// .fa-search{
//   color:white;
//   padding-right:0.5rem;
//   font-size:1rem;
// }