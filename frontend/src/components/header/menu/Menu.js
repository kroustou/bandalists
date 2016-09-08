import React from "react";
import {Link} from "react-router";

require("./menu.scss");

const Menu = () => (
    <ul className="three columns menu" >
        <li className="four columns"><Link to="/">Home</Link></li>
        <li className="four columns"><Link to="dashboard">dashboard</Link></li>
        <li className="four columns"><Link to="profile">profile</Link></li>
    </ul>
);

export default Menu;
