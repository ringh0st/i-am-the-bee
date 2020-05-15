import { createGlobalStyle } from "styled-components";
import { Normalize } from 'styled-normalize'


export const CarouselStyle = createGlobalStyle`
  ${Normalize} 


.carousel-container{
    position: relative;

}
.slider-container{
    display: flex;
    position: relative;
    

}
.slider-img{
    width: 70vw;

}
.slider-details{
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    left: 20px;
    bottom: 40px;
    padding: 3.5rem;
    background-color: rgb(221, 204, 55);
    width:30vw;
    background: linear-gradient(135deg, rgb(0, 0, 0) 0, rgba(92, 88, 88, 0) 40%, rgba(221, 204, 55, 0) 40%,rgba(58,58,58,0) 59%, rgba(58,58,58,0) 59%, rgba(63,63,63,0) 100%), linear-gradient(135deg, rgba(62, 62, 60, 0.55) 0, rgba(0, 0, 0, 0) 7%, rgba(79,79,79,0) 7%, rgba(63,63,63,0) 100%), linear-gradient(315deg, rgba(0, 0, 0, 0.78) 0, rgba(148, 140, 140, 0.41) 7%, rgba(79,79,79,0) 7%, rgba(110, 110, 110, 0) 100%), rgba(253, 218, 40    , 0.79);

    
}
.slider-title{
    color: rgb(10, 10, 10);
    font-size: 3rem;
    /* left: 20px;
    top: 20px; */
    z-index: 1;
    text-transform: uppercase;
    font-weight: 800; 
    font-family: var(--primary-font);



}
.slider-year{
    color: rgb(255, 255, 255);
    font-size: 2rem;
    /* position: absolute; */
    /* right: 20px;
    top: 20px; */
    z-index: 1;
    font-weight: 800;
    font-family: var(--primary-font);


}
.slider-more{
    
    text-decoration: none;
    color: white;
    font-size: 1.6rem;
    // font-weight: 800;
    padding: 15px;
    background-color: rgb(61, 61, 61);
    width: fit-content;
    padding-left:1.5rem;
    padding-right:1.5rem;
    border-radius: var(--border-radius);
    font-family: var(--primary-font);

}
`