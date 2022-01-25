import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="3452345234"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51aEhyjQGrL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
            rating={5}
          />
          <Product
            id="435897632"
            title="Shure SM7B Vocal Dynamic Microphone for Broadcast, Podcast & Recording, XLR Studio Mic for Music & Speech, Wide-Range Frequency, Warm & Smooth Sound, Rugged Construction, Detachable Windscreen - Black"
            price={359.0}
            image="https://m.media-amazon.com/images/I/71LYHO3+wnL._AC_SL1356_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="34479292"
            title="Best Chess Set Ever Triple Weighted Tournament Style Chess Set"
            price={39.99}
            image="https://m.media-amazon.com/images/I/71Ob+1ingpL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="084587392"
            title="Google Nest Wifi -  AC2200 - Mesh WiFi System -  Wifi Router - 4400 Sq Ft Coverage - 2 pack"
            price={214.0}
            image="https://m.media-amazon.com/images/I/61nj6CGEoaL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="57392920"
            title="SEIKO Men's SNK803 SEIKO 5 Automatic Watch with Beige Canvas Strap"
            price={92.98}
            image="https://m.media-amazon.com/images/I/81-IOi2rbmL._AC_UY679_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="579340234"
            title="Philosophical Investigations 4th Edition"
            price={29.95}
            image="https://images-na.ssl-images-amazon.com/images/I/41IhsTqZh6L._SX340_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
