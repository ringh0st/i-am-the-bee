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
                <div className="linksContainer">
                <Link to={"/latest/page/1"} >
                    <div className="link-item">Latest Movies</div>
                </Link>
                <Link to={"/top/page/1"} >
                    <div className="link-item">Top Movies</div>
                </Link>
                    {/* <li></li> */}
                </div>
            </nav>
        </>
    )
}

export default NavBar;