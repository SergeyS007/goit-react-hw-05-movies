import { Link } from 'react-router-dom';
import { Container, MoviesName } from './MoviesList.styled';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
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
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
  // location: PropTypes.object.isRequired,
};
