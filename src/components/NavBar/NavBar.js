import React from 'react';
import '../NavBar/NavBar.css';
import { Link } from 'react-router-dom';
import icon from '../../images/beeandtextlogo.png';
const NavBar = () => {

    return(
        <>
            <nav className="navbars">
                <Link to={"/"} >
                    <img className="bee-icon" alt="icon" src={icon}></img>
                </Link>
                <ul className="linksContainer">
                <Link to={"/latest/page/1"} >
                    <li>Latest Movies</li>
                </Link>
                <Link to={"/top/page/1"} >
                    <li>Top Movies</li>
                </Link>
                    <li></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;