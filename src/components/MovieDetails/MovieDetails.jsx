import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieDetails.css';

import IconButton from '@mui/material/IconButton';
import UndoIcon from '@mui/icons-material/Undo';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

function MovieDetails() {
  let history = useHistory();
  const movieDetail = useSelector((store) => store.movieDetail);
  const handleBacktoList = () => {
    history.push('/');
  };

  return (
    <>
      <div data-testid="movieDetails">
        <h1 class="list">This is Details</h1>

        <Grid container spacing={2}>
          <Grid xs={8}>
            <img src={movieDetail.poster} />
          </Grid>
          <Grid xs={6}>
            <p class="detailname">{movieDetail.title}</p>
          </Grid>
          <Grid xs={7}>
            <p class="detaildescrip"> {movieDetail.description}</p>
          </Grid>
          <Grid xs={4}>
            <p class="detailgenre"> {movieDetail.genre}</p>
          </Grid>
        </Grid>
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
