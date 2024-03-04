import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import './MovieList.css';

function MovieList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const handleMovieDetails = (event) => {
    event.preventDefault();
    console.log(event.target);
    dispatch({
      type: 'FETCH_MOVIE_DETAIL',
      payload: event.target.id,
    });
    history.push('/details');
  };

  return (
    <main>
      <h1>MovieList</h1>

      <section className="movies">
        <ImageList
          sx={{ width: 1800, height: 600 }}
          variant="woven"
          cols={7}
          gap={8}
        >
          {movies.map((movie) => {
            return (
              <ImageListItem key={movie.id}>
                <div data-testid="movieItem">
                  <div data-testid="toDetails" onClick={handleMovieDetails}>
                    <img
                      srcSet={`${movie.poster}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${movie.poster}?w=248&fit=crop&auto=format`}
                      alt={movie.title}
                      id={movie.id}
                      loading="lazy"
                    />
                    <ImageListItemBar position="above" title={movie.title} />
                  </div>
                </div>
              </ImageListItem>
            );
          })}
        </ImageList>
      </section>
    </main>
  );
}

export default MovieList;
