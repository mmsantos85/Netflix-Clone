import React, { useState, useEffect } from 'react';
import '../style.css';

import axios from '../axios';
import ReactPlayer from 'react-player/youtube';
// import requests from '../Requests';
import { AiFillCloseCircle } from 'react-icons/ai';

const Banner = () => {
  const API_KEY = '00c655f5cf699862386184d892b7378f';
  const [movie, setMovie] = useState([]);
  const [active, setActive] = useState(false);
  const [details, setDetails] = useState(false);
  const [title, setTitle] = useState('');
  const [movieId, setMovieId] = useState('');

  // tijdelijke API call
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/Discover');
      setMovie(request.data?.results);
      setMovieId(request.data?.results[0]);
      return request;
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchTitle() {
      const movieTitle = await axios.get(
        `http://webservice.fanart.tv/v3/movies/460465?api_key=${API_KEY}`
      );
      setTitle(movieTitle.data?.hdmovielogo[0]);
      return movieTitle;
    }
    fetchTitle();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${
          movie[0]?.backdrop_path || movie[0]?.poster__path
        }")`,
      }}
    >
      {active ? (
        <div className="player-wrapper">
          <ReactPlayer
            playing={true}
            className="react-player"
            url="https://www.youtube.com/watch?v=lFDVL1e8WM4"
            width="100%"
            height="100%"
          />
          <button onClick={() => setActive(!active)} className="player__button">
            x
          </button>
        </div>
      ) : (
        <>
          <div className="banner__contents">
            {/* <h1 className="banner__contents__title">{movie.original_title}</h1> */}

            <img src={title?.url} alt="" />

            <div className="banner__contents__buttons">
              <button
                onClick={() => setActive(true)}
                className="banner__button"
              >
                Afspelen
              </button>
              <button
                onClick={() => setDetails(true)}
                className="banner__button"
              >
                Meer informatie
              </button>
            </div>
            <h1 className="banner__contents__description">
              {truncate(`${movie[0]?.overview}`, 150)}
            </h1>
          </div>
          <div className="banner--fadeBottom" />
        </>
      )}
      {details ? (
        <div className="pop-up">
          <ReactPlayer
            playing={true}
            muted={true}
            className="pop-up__react-player"
            url="https://www.youtube.com/watch?v=lFDVL1e8WM4"
            width="100%"
            height="100%"
          />
          <div className="pop-up__trailer"></div>
          <span className="pop-up__close">
            <AiFillCloseCircle onClick={() => setDetails(false)} />
          </span>
          <div className="pop-up__content">
            <img className="pop-up__content__title" src={title?.url} alt="" />
            <div className="pop-up__content__buttons">
              <div className="button-container">
                <button>Afspelen</button>
              </div>
              <div className="button-mute">
                <button>MUTE</button>
              </div>
            </div>

            <div className="pop-up__content__description">
              <p className="release">
                <span className="average">Cijfer {movie.vote_average}</span>
                {` ${movie.release_date}`}
              </p>

              <img
                src="https://cdn.worldvectorlogo.com/logos/kijkwijzer.svg"
                alt=""
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/kijkwijzer-geweld.svg"
                alt=""
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/kijkwijzer-angst.svg"
                alt=""
              />
            </div>
            <div className="pop-up__content__container">
              <div className="description">
                <p>{movie[0]?.overview}</p>
              </div>
              <div className="genres">genre: Action</div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </header>
  );
};

export default Banner;

// Math.floor(Math.random() * request.data.results.length - 1)
