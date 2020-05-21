import styled from 'styled-components'

export const CastContainer = styled.div`
/* border-radius: var(--border-radius);
background: ${p=>p.primary ? 'black' : 'white'};
padding-left: 1.5rem;
font-family: 'Righteous', cursive;
padding-top: 0.75rem;
padding-bottom: 0.75rem; */
transition: transform .5s;

&:hover{
/* background:#272727; */
transform: scale(1.1);
}
`

export const CastImage = styled.img`
    width: 150px;
    margin: 10px;

`
export const CastCharacter = styled.div`
font-size: 0.8rem;
`
export const CastName = styled.div`
font-size: 1.4rem;
`