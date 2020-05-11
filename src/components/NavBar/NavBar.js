import React from 'react';
import '../NavBar/NavBar.css';
import { Link } from 'react-router-dom';
import icon from '../../images/bee.png';
const NavBar = () => {

    return(
        <>
            <nav className="navbars">
                <Link to={"/"} >
                    <img className="bee-icon" alt="icon" src={icon}></img>
                </Link>
                <div className="linksContainer">
                <Link  className="link-item" to={"/latest/page/1"} >
                    <div >Latest Movies</div>
                </Link>
                <Link className="link-item"  to={"/top/page/1"} >
                    <div className="link-item">Top Movies</div>
                </Link>
                    {/* <li></li> */}
                </div>
            </nav>
        </>
    )
}

export default NavBar;