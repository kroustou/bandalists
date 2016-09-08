import React from "react";
import Menu from "./menu/Menu";
import logo from "../../images/logo.png"
const Header = () => (
	<header className="row">
		<div className="container">
            <div className="logo two columns">
                <img src={logo}/>
            </div>
            <Menu/>
        </div>
	</header>
);

export default Header;
