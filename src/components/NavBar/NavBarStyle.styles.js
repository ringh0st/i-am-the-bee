import { createGlobalStyle } from "styled-components";
import { Normalize } from 'styled-normalize'


export const NavBarStyle = createGlobalStyle`
  ${Normalize} 
.navbars{
    
    height: 80px;
    display: flex;
    justify-content: space-between; 
    position: fixed;
    z-index: 1;
    width: 100vw;
    align-items: center;
    margin: 0;
    padding: 0;
}
.linksContainer{
    display: flex;
    align-items: center;
}
.bee-icon{
    padding-left:1.5rem;
    padding-right: 1.5rem;
    width:2.5rem ;
}
// .text-icon{
//     width:6rem ;
//     padding-bottom: 10px;

// }
.link-item{
    text-decoration: none;
    color: var(--primary-color);
    margin-left: 30px;  
    margin-right: 30px;
    font-size: 1.2rem;
    opacity:0.8;
    text-transform: uppercase;
    padding: 10px;
    background: var(--background-color);
    border-radius: var(--border-radius);
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-family: 'Righteous',cursive;
} 
/* .link-item:visited {
    text-decoration: none;
  } */ 
.right-nav{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.search-item{
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}
.link-item:hover{
    opacity:1;
    color:black;
}
`