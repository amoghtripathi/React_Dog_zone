import React from 'react'
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="bannerIMG" />

        {/* Producr with id name price star image */}

        <Product
            id="123"
            title="the book: how to read and write"
            price={11}
            rating={5}
            image="https://m.media-amazon.com/images/I/9138VXjBfPL._AC_UY327_FMwebp_QL65_.jpg"
            
        />
        </div>
    )
}

export default Home
