import { useEffect, useState } from 'react';
import { fetchMovieByName } from 'services/api';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';

const MovieSearch = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('moviename');
  const location = useLocation();
  console.log(location);

  const onFormSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.moviename.value;
    setSearchParams({ moviename: value });
  };

  useEffect(() => {
    if (!query) return;
    fetchMovieByName(query).then(setMovies);
  }, [query]);

  console.log(movies);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input name="moviename" type="text" />
        <button>Search</button>
      </form>

      {movies && <MoviesList movies={movies.results} />}
      <Outlet />
    </div>
  );
};

export default MovieSearch;
