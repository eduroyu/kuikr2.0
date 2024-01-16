import React, { useState, useEffect, useRef } from 'react';

import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './hero-slide.scss';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const HeroSlide = () => {

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = {
                page: 1,
                language: 'es'    
            }
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovieItems(response.results.slice(0, 9));
                console.log(response);
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);

    return (
        <div className="hero-slide">
            <CarouselProvider
                className="full-width-carousel"
                orientation="horizontal"
                totalSlides={movieItems.length}
                interval={4000}
                naturalSlideWidth={1}
                isIntrinsicHeight
                isPlaying
                infinite
                dragEnabled
            >
                <Slider>
                    {movieItems.map((item, i) => (
                    <Slide key={i}>
                        <HeroSlideItem className='active' item={item}/>
                    </Slide>
                    ))}
                </Slider>
            </CarouselProvider>
            {
                movieItems.map((item, i) => <TrailerModal key={i} item={item}/>)
            }
      </div>
    );
}

const HeroSlideItem = props => {
    
    let history = useHistory();

    const item = props.item;
    
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path: item.poster_path);

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);

        const params = {
            language: 'es'    
        }

        const videos = await tmdbApi.getVideos(category.movie, item.id, {params});

        if(videos.results.length > 0){
            const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc);
        }else {
            modal.querySelector('.modal__content').innerHTML = 'No trailer';
        }

        modal.classList.toggle('active');
    }

    return (
        <div 
            className={`hero-slide__item ${props.className}`}
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">
                        {item.overview}
                    </div>
                    <div className="btns">
                        <Button onClick={() => history.push('/movie/' + item.id)}>
                            Ver ahora
                        </Button>
                        <OutlineButton onClick={setModalActive}>
                            Ver trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className='hero-slide__item__content__poster'>
                    <img src={apiConfig.w500Image(item.poster_path)} alt="poster" />
                </div>
            </div>
        </div>
    )
}

const TrailerModal = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title='trailer'></iframe>
            </ModalContent>
        </Modal>
    )
}

export default HeroSlide;