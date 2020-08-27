import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';

 
function Header() {

    const [{ basket }, dispatch]= useStateValue();
    // console.log(basket);

    return (
        <nav className="header">
        <Link to="/signup">
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

            <Link to="/login" className="header__link">
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

        <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
        </Link>

        

        </div>
       

        </nav>
    );
}

export default Header
