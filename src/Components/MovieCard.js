import React from 'react';
import './MovieCard.css';

const MovieCard = ({ name, rating, releasedDate, poster }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={poster} alt={name} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">Ratings: {rating}</p>
        <p className="card-text">Released: {releasedDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
