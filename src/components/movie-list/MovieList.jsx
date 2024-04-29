import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from'react-router-dom';

import Button from '../button/Button';

import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import MovieCard from '../movie-card/MovieCard';

const MovieList = props => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {params});
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);   
            }
            setItems(response.results);
        }
        getList();
    }, [])
    
    return (
        <div className='movie-list'>
            <Slider
                swipeToSlide={true}
                slidesToShow={6}
                initialSlide={0}
                responsive= {[
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }
                ]}
                
            >
                {items.map((item, index) => (
                    <div key={index}>
                        <MovieCard item={item} category={props.category}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList