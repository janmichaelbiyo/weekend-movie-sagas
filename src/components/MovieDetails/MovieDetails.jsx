import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails() {
  let history = useHistory();
  const movieDetail = useSelector((store) => store.movieDetail);
  const handleBacktoList = () => {
    history.push('/');
  };

  return (
    <>
      <div data-testid="movieDetails">
        <h1>This is Details</h1>
        <img src={movieDetail.poster} />
        <p>
          {movieDetail.title}, {movieDetail.description},{movieDetail.genre}
        </p>

        <button data-testid="toList" onClick={handleBacktoList}>
          Back
        </button>
      </div>
    </>
  );
}

export default MovieDetails;
