import { Link } from 'react-router-dom';
import { Container, MoviesName } from './MoviesList.styled';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, location }) => {
  return (
    <Container>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={`${movie.id}`}
            state={{ from: location.pathname + location.search }}
          >
            <MoviesName>{movie.original_title}</MoviesName>
          </Link>
        </li>
      ))}
    </Container>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
};
