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
export const MovieCardContainer = styled.div`
    position: relative;
    text-align: center;
    z-index: 0;
    margin: 30px;
    background-color: transparent;
    perspective: 1000px;
    transition: transform 0.5s;
  transform-style: preserve-3d;
  &:hover{
    transform: rotateY(180deg);
    width:200px;
    height:100%;



  }
`

export const PosterContainer = styled.div`
  backface-visibility: hidden;
  width:200px;
  height:100%;


`
export const MovieCardInner = styled.div`
    transition: transform 0.6s;
    width:200px;
  transform-style: preserve-3d;
`
export const MovieCardPoster = styled.img`
    width:200px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px -2px rgba(0,0,0,1);
    border-top:    4px solid black;
    border-right:  2px solid black; 
    border-bottom: 4px solid black;

`




export const MovieCardInfo = styled.div`
  backface-visibility: hidden;
    background-color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* opacity: 0; */
    /* transition: 1s; */
    border-radius: 5px;
    transform: rotateY(180deg);
    border-top:    4px solid black;
    border-left:  3px solid black; 
    border-bottom: 4px solid black;
    /* &:hover{
        display:block;
        transform: rotateY(180deg);
    } */
    
    
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