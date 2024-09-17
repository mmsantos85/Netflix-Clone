import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import '../style.css';
import Trailers from './Trailers';

const Row = ({ genre, type, id }) => {
  const button = document.getElementById('slide');
  return (
    <div className="container">
      <h2>{type && type}</h2>
      <button
        onClick={() =>
          (document.getElementById(`slider${id}`).scrollLeft -= 200)
        }
      >
        <BsChevronLeft />
      </button>
      <button
        onClick={() =>
          (document.getElementById(`slider${id}`).scrollLeft += 200)
        }
        style={{ marginLeft: '3%' }}
      >
        <BsChevronRight />
      </button>

      <div className="row" id={`slider${id}`}>
        {genre.map((movie) => (
          <div>
            <Trailers
              key={movie.id}
              movieId={movie.id}
              vote={movie.vote_average}
              release={movie.release_date}
              imageUrl={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
