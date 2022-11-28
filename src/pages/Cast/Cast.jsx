import * as SC from './Cast.styled';
import { useFetchCast } from 'Hooks/UseFetchCast';

const Cast = () => {
  const cast = useFetchCast();
  console.log(cast);

  return (
    <>
      {cast && cast.cast.length > 0 ? (
        <ul>
          {cast.cast.map(actor => (
            <SC.Li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                width="220"
              />
              <span>{actor.name}</span>
              <span>Character: {actor.character}</span>
            </SC.Li>
          ))}
        </ul>
      ) : (
        <div>The cast is absent</div>
      )}
    </>
  );
};

export default Cast;
