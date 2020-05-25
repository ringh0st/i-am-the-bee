import styled from 'styled-components';
// import { keyframes } from 'styled-components'
// const fadeInOpacity = keyframes`
// 	0%{
// 		opacity: 0;
// 	}
// 	100% {
// 		opacity: 0.5;
//     }
// `;

export const MovieCardPoster = styled.img`
    width:200px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px -2px rgba(0,0,0,1);
    


`

export const MovieCardContainer = styled.div`
    position: relative;
    text-align: center;
    z-index: 0;
    margin: 30px;
`


export const MovieCardInfo = styled.div`
    background-color: rgba(0, 0, 0, 0.863);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 1s;
    &:hover{
        display:block;
        opacity:1;
    }
    
    
`

export const MovieTitle = styled.div`
    position: absolute;
    color: cornsilk;
    bottom: 8px;  
    font-weight: 500;
    font-size: 1rem;
    right: 4px;
    left:4px;
    
`

export const MovieReleaseDate = styled.div`
    position: absolute;
    color: aliceblue;
    font-weight: 500;
    font-size: 1rem;
    top: 8px;  
    left:4px;
`
export const MovieAvgVote = styled.div`
    position: absolute;
    display: flex;
    color: #DCCC37;
    font-weight: 500;
    font-size: 1rem; 
    top: 8px;
    right: 5px;
`
export const MoreButton = styled.div`
    position: absolute;
    color: rgb(255, 242, 65);
    font-weight: 500;
    font-size: 1.5rem;
    bottom: 150px;  
    left: 4px;
    right:4px;

`
export const MovieRating = styled.div`

`