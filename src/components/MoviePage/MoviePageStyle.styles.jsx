import styled from 'styled-components'
import backimage from '../../images/backGroundDirty.jpg'

export const MoviePageContainer = styled.div`
padding-top: 70px;
`

export const BackDropImage = styled.div`
    height: 80vh;
    display: flex;
    justify-content: space-evenly;
    /* margin: 10rem; */

`
export const CastContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:flex-start ;
    font-family: 'Righteous',cursive;
    color:white;
`

export const Trailer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items:flex-start ;
    background-image:url('${backimage}');
    width:100%;

`
export const MovieDetailsContainer = styled.div`
    display: flex;
    align-items:center ;
    flex-direction:column;
`
export const DetailsContainer = styled.div`
    display: flex;
    align-items:center ;
    flex-direction:column;
    background-image:url('${backimage}');
`
