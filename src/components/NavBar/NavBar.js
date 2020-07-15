import React from "react";
import { NavBarStyle } from "./NavBarStyle.styles.js";
import { Link } from "react-router-dom";
import bee from "../../images/bee.png";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
// import text from '../../images/textLogo.png';

import Search from "../../components/Search/Search";

const NavBar = (props) => {
  return (
    <>
      <NavBarStyle />

      <nav className="navbars">
        <div className="right-nav">
          <Link className="link-bee" to={"/"}>
            <img className="bee-icon" alt="icon" src={bee}></img>
          </Link>
          <div className="search-item">
            <Search
              getMovieData={props.getMovieData}
              setPathType={props.setPathType}
            />
          </div>
        </div>

        <div className="linksContainer">
          <Link
            className="link-item"
            to={{
              pathname: "/latest/page/1",
              state: {
                type: "latest",
              },
            }}
          >
            <div>Latest Movies</div>
          </Link>
          <Link
            className="link-item"
            to={{
              pathname: "/top/page/1",
              state: {
                type: "top",
              },
            }}
          >
            <div>Top Movies</div>
          </Link>
          <Link
            className="link-item"
            to={{
              pathname: "/revenue/page/1",
              state: {
                type: "revenue",
              },
            }}
          >
            <div>Box Office</div>
          </Link>
          <ChangeLanguage />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
