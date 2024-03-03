import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails() {
  const movieDetail = useSelector((store) => store.movieDetail);

  return (
    <>
      <div>
        <h1>This is Details</h1>
        <img src={movieDetail.poster} />
        <p>
          {movieDetail.title}, {movieDetail.description},{movieDetail.genre}
        </p>
      </div>
    </>
  );
}

export default MovieDetails;
