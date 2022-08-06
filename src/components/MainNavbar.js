import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

class Navbar extends React.Component{


    render(){ 
        return(
            <div className="navbar">
                <Link to="/"><div className="logo"></div></Link>
                <div className="hamburger-btn">
                    <div className="hamburger">
                    </div>
                </div>
                <div className="menu">
                    <div className="mobile-menu-items">
                            <Link className="mobile-menu-link" to="/collection">Artworks</Link>
                            <Link className="mobile-menu-link" id="link" to="/events"><b>Events</b></Link>
                    </div>
                </div>
                <div className="navbar-links">
                    <Link className="navbar-desktop-link" to="/collection">Artworks</Link>
                    <Link className="navbar-desktop-link event-navbar-link" to="/events">Events</Link>
                </div>
            </div>
        )
    }

}

export default Navbar;