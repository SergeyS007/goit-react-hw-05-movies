import * as SC from './Cast.styled';
import { useFetchCast } from 'Hooks/UseFetchCast';

const Cast = () => {
  const cast = useFetchCast();
  console.log(cast);

  return (
    <>
      {cast && (
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
      )}
    </>
  );
};

export default Cast;

// import { useNavigate, useLocation } from 'react-router-dom';

// export const Details = () => {
//   const event = useFetchEvent();
//   const navigate = useNavigate();
//   const location = useLocation();
//   console.log(location.state);

//   return (
//     <>
//       <button
//         onClick={() => navigate(location?.state?.from ?? '/')}
//         type="button"
//       >
//         Go back
//       </button>
//       {event && (
//         <div>
//           <h3>{event.name}</h3>
//           <p>{event.info}</p>
//           <img src={event.images[1].url} alt={event.name} width="320" />
//         </div>
//       )}
//     </>
//   );
// };
