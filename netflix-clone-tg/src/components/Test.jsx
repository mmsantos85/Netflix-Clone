import React from 'react';

function Test({ imageUrl, num }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <p className="text-rank">{num + 1}</p>
      <img
        className="slider-image"
        src={`https://image.tmdb.org/t/p/original${imageUrl}`}
        alt=""
      />
    </div>
  );
}

export default Test;
