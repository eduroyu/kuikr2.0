import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { OutlineButton } from '../components/button/Button';

import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';
const Home = () => {
  return (
    <>
        <HeroSlide/>
        <div className="container">
          <div className="section mb-3">
            <div className="section__header mb-2">
              <h1>Trending Movies</h1>
              <Link to="/movie">
                <OutlineButton>Ver más</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.movie} type={movieType.popular}/>
          </div>

          <div className="section mb-3">
            <div className="section__header mb-2">
              <h1>Top Rated Movies</h1>
              <Link to="/movie">
                <OutlineButton>Ver más</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.movie} type={movieType.top_rated}/>
          </div>

          <div className="section mb-3">
            <div className="section__header mb-2">
              <h1>Trending TV</h1>
              <Link to="/movie">
                <OutlineButton>Ver más</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.tv} type={tvType.popular}/>
          </div>

          <div className="section mb-3">
            <div className="section__header mb-2">
              <h1>Top Rated TV</h1>
              <Link to="/movie">
                <OutlineButton>Ver más</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.tv} type={tvType.top_rated}/>
          </div>
        </div>
    </>
  );
}

export default Home;