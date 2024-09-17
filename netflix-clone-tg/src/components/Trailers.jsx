import axios from 'axios';
import React, { useRef } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useState, useEffect } from 'react';
import screenfull from 'screenfull';

import {
  VscThumbsdown,
  VscThumbsup,
  VscUnmute,
  VscMute,
} from 'react-icons/vsc';

import { BsPlayFill } from 'react-icons/bs';

const Trailers = ({ imageUrl, movieId, vote, release }) => {
  const [allTrailers, setAllTrailers] = useState([]);
  const [info, setInfo] = useState([]);
  const [time, setTime] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [mute, setMute] = useState(true);

  const player = useRef(null);
  const handleClickFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.request(player.current.wrapper);
      setMute(false);
    }
  };

  useEffect(() => {
    async function fetchTrailer() {
      const movieTrailer = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=d4e2448287553d83842f860fea84e802&language=en-US`
      );
      setAllTrailers(movieTrailer?.data.results[0]);

      return movieTrailer;
    }
    fetchTrailer();
  }, [movieId]);

  useEffect(() => {
    async function fetchTrailer() {
      const movieInfo = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=d4e2448287553d83842f860fea84e802`
      );
      setInfo(movieInfo?.data.genres);
      setTime(movieInfo?.data.runtime);

      return movieInfo;
    }
    fetchTrailer();
  }, [movieId]);

  return (
    <div>
      <img
        className="image"
        src={imageUrl}
        alt=""
        onMouseEnter={() => setIsShown(true)}
      />
      {isShown && (
        <div className="trailer" onMouseLeave={() => setIsShown(false)}>
          <ReactPlayer
            playing={true}
            muted={mute}
            url={`https://www.youtube.com/watch?v=${
              allTrailers ? allTrailers.key : 'dQw4w9WgXcQ'
            }`}
            width="400px"
            height="480px"
            ref={player}
          />
          <div className="button-container">
            <BsPlayFill onClick={handleClickFullscreen} />
            {mute ? (
              <VscMute onClick={() => setMute(!mute)} />
            ) : (
              <VscUnmute onClick={() => setMute(!mute)} />
            )}{' '}
            <VscThumbsdown />
            <VscThumbsup />
          </div>

          <p>
            Cijfer: {vote} &nbsp; Tijdsduur: {time} min
          </p>
          <div className="genres">
            {info.map((genre) => (
              <p>{genre.name} &nbsp; &nbsp;</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Trailers;
