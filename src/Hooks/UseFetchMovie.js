import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/api';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieById(id).then(setMovie);
  }, [id]);
  console.log('useFetchMovie ', movie);
  return movie;
};
