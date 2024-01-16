import React from 'react'

import HeroSlide from '../components/hero-slide/HeroSlide';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { OutlineButton } from '../components/button/Button';

const Home = () => {
  return (
    <>
        <HeroSlide/>
        <div className="container">
          <div className="section mb-3">
            <div className="section__header mb-2">
              <h1>Top Movies</h1>
              <Link to="/movie">
                <OutlineButton>Ver más</OutlineButton>
              </Link>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;