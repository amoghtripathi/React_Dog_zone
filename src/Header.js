import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";


function Header() {
    return (
        <nav className="header">
        <Link to="/checkout">
            <img
             className="header_logo" 
             src="http://dogzone.com.au/wp-content/themes/dogzone/library/images/DogZone-logo-horizontal.png" 
             alt="logo" />
        </Link>  

        {/* searchBar */}
        
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>
        

        {/* subLinks   npm i @material-ui/icons */}

       

        </nav>
    );
}

export default Header
