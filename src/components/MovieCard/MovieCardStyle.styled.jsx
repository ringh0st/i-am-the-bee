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
    /* position: relative; */
    text-align: center;
    /* z-index: 0; */
    margin: 30px;
    background-color: transparent;
    /* perspective: 1000px; */
    width:200px;
  height:300px;

`
export const MovieCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
  &:hover{
    transform: rotateY(180deg);
  }
      
`
export const PosterContainer = styled.div`
  backface-visibility: hidden;
  width:100%;
  height:100%;

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
    transition: 1s;
    border-radius: 5px;
    transform: rotateY(180deg);
    border-top:    4px solid black;
    border-left:  3px solid black; 
    border-bottom: 4px solid black;    
    
`

export const MovieTitle = styled.div`
    position: relative;
    color: cornsilk;
    /* bottom: 8px;   */
    font-weight: 500;
    font-size: 1rem;
    /* right: 4px;
    left:4px; */
    background:black;
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    width:100%;
    
`
export const MovieOverView = styled.div`

`
export const BackImage = styled.img`
    /* position: absolute; */
    width:100%;
  /* height:100%; */

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