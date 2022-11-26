import { Link, Outlet } from 'react-router-dom';
import { useFetchMovie } from '../../Hooks/UseFetchMovie';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Text, List, Li, Image } from './MovieDetails.styled';

const MovieDetails = () => {
  const movie = useFetchMovie();
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location', location.state);

  return (
    <>
      <button
        onClick={() => navigate(location?.state?.from ?? '/')}
        type="button"
      >
        Go back
      </button>
      {movie && (
        <Container>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
            width="200"
          />
          <div>
            <h2>{movie.original_title}</h2>
            <p>User score: {movie.vote_average * 10}%</p>
            <p>
              <Text>Overview: </Text>
              {movie.overview}{' '}
            </p>
            <Text>Genres:</Text>
            <List>
              {movie.genres.map(genre => (
                <Li key={genre.id}>{genre.name}</Li>
              ))}
            </List>
          </div>
        </Container>
      )}
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
