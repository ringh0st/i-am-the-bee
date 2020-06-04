import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  text-align: center;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  margin: 30px;
  background-color: transparent;
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
  &:hover{
    transform: rotateY(180deg);
  }
      
`
export const PosterContainer = styled.div`
  backface-visibility: hidden;
  width:100%;
  height:100%;
  border-top:    7px solid black;
  border-right:  6px solid black; 
  border-bottom: 7px solid black;  
  border-radius: 5px;
  align-items:center;
  display:flex;
  justify-content:center;
`

export const MovieCardPoster = styled.img`
  width:200px;
  height: 100%;
    

`

export const MovieCoverInfo = styled.div`
  display:flex;
  flex-wrap:wrap;
  background:black;
  color:white;
  text-align: justify;
  font-size:0.3rem;
  
`
export const MovieCoverInfoContainer = styled.div`
  display:flex;
  bottom:30px;
  position:absolute;
  
`
export const MovieCardBack = styled.div`
  backface-visibility: hidden;
    background-color: black;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 1s;
    border-radius: 5px;
    transform: rotateY(180deg);
    border-top:    6px solid black;
    border-left:  5px solid black; 
    border-bottom: 6px solid black;  
     
    
`

export const MovieTitle = styled.div`
    position: absolute;
    color: cornsilk;
    font-weight: 500;
    font-size: 1rem;
    right: 4px;
    left:4px;
    backface-visibility: hidden;

    
    
`
export const MovieCardOfficialPoster = styled.img`
  width:35%;
  position:absolute;
  right:0;
  top:35%;
  z-index:1;

`
export const MovieOverView = styled.div`
background:rgba(5, 3, 3, 0.72);
color:white;
/* width:56%; */
position:absolute;
z-index:1;
top:20%;
font-size: 7px;
/* opacity:0.5; */
display:flex;
flex-wrap:wrap;
text-align: justify;
float:left;
margin:20px;
margin-right:20%;


/* padding:1rem; */



`
export const BackImage = styled.img`
    position: relative;
    width:100%;
  /* height:100%; */
  z-index:0;

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
    z-index:1;
    /* bottom: 150px;   */
    left: 4px;
    right:4px;
    bottom:5px;
    

`
export const MovieRating = styled.div`

`