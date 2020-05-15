import React from 'react';
import {NavBarStyle} from './NavBarStyle.styles.js';
import { Link } from 'react-router-dom';
import bee from '../../images/bee.png';
// import text from '../../images/textLogo.png';

import SearchButton from '../SearchButton/SearchButton'
const NavBar = () => {
    
    return(
        <>
                    <NavBarStyle/>

            <nav className="navbars">
                <div className="right-nav">
                <Link to={"/"} >
                    <img className="bee-icon" alt="icon" src={bee}></img>&ensp;
                    {/* <img className="text-icon" alt="icon" src={text}></img> */}

                </Link>
                <div className="search-item">
                <SearchButton />
                </div>
                
                </div>

                <div className="linksContainer">
                <Link className="link-item" to={"/latest/page/1"} >
                    <div >Latest Movies</div>
                </Link>
                <Link className="link-item"  to={"/top/page/1"} >
                    <div >Top Movies</div>
                </Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar;