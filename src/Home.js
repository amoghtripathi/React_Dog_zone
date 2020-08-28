import React from 'react'
import Product from "./Product";
import "./Home.css";


function Home() {
    return (
        <div className="home">
            <img className="home__image" 
            src="https://i.imgur.com/HpqRWA9.png"
            alt="bannerIMG" />

        {/* Products with id name price star image */}
        <div className="home__row">
            <Product
                id="1"
                title="Pedigree Adult Dry Dog Food, Meat & Rice, 1.2kg Pack"
                price={250}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/61xFTcEHBEL._SX425_.jpg"
                
            />
            <Product
                id="2"
                title="Sage Square Dog Cat Bath Brush Comb Rubber Hair Fur Grooming Massage Hand Shower"
                price={149}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71O2z3X2aQL._SL1100_.jpg"
                
            />
        </div>
        <div className="home__row">
        <Product
                id="3"
                title="
                Kiki N Pooch Pet Comb Stainless Steel Pin Dog Grooming Brush"
                price={210}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/610%2BQmUsxXL._SL1280_.jpg"
                
            />
            <Product
                id="4"
                title="PetsUp Service Dog Harness, Chest Body Belt for Dogs (Red)"
                price={1225}
                rating={5}
                image="https://cdn.shopify.com/s/files/1/0920/9800/products/5910BLXL2.jpg?v=1565069732"
                
            />
            <Product
                id="5"
                title="Choostix Chicken Dog Treat, 450g"
                price={200}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81NFMMQfblL._SX425_.jpg"
                
            />
        </div>
        <div className="home__row">
            <Product
                    id="6"
                    title="AmazonBasics Dog Diaper, Large - Pack of 30"
                    price={1499}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/711OIuziC2L._SL1500_.jpg"
                    
                />
        </div>
        </div>
    )
}

export default Home
