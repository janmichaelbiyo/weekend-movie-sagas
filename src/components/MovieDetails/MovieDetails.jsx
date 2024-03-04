import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import UndoIcon from '@mui/icons-material/Undo';

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

        <IconButton
          aria-label="back"
          size="large"
          data-testid="toList"
          onClick={handleBacktoList}
        >
          <UndoIcon fontSize="inherit" />
        </IconButton>
      </div>
    </>
  );
}

export default MovieDetails;
