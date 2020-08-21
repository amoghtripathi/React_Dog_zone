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

        <div className="header__nav">
        
        {/* Links on nab  (1st link) */}

            <Link to="/checkout" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello User</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
            </Link>

        {/* 2nd link */}

        
            <Link to="/checkout" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Orders</span>
                    <span className="header__optionLineTwo">& Returns</span>
                </div>
            </Link>

        {/* 3rd link */}

        
            <Link to="/checkout" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>

        {/* 4th link (basket) */}



        </div>
       

        </nav>
    );
}

export default Header
