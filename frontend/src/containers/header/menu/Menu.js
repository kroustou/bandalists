import React from "react";
import {Link, IndexLink} from "react-router";

const Menu = () => (
    <ul className="seven columns menu" >
        <li className="three columns"><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        <li className="three columns"><Link activeClassName="active" to="/dashboard/">dashboard</Link></li>
        <li className="three columns"><Link activeClassName="active" to="/profile/">profile</Link></li>
        <li className="three columns"><Link activeClassName="active" to="/login/">login</Link></li>
    </ul>
);

export default Menu;
