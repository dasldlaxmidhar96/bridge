import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/movies')
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="conatiner">
      <div className="row">
        {movies.map((movie) => {
          return (
            <div className="col-md-4 mb-3">
              <MovieCard
                key={movie.id}
                name={movie.Title}
                rating={movie.Ratings}
                releasedDate={movie.Released}
                poster={movie.Poster}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
