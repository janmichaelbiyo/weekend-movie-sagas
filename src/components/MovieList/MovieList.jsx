import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
        {movies.map((movie) => {
          return (
            <div data-testid="movieItem" key={movie.id}>
              <h3>{movie.title}</h3>
              <div data-testid="toDetails" onClick={handleMovieDetails}>
                <img src={movie.poster} alt={movie.title} id={movie.id} />
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
