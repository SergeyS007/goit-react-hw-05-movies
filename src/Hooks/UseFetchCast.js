import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from '../services/api';

export const useFetchCast = () => {
  const [cast, setCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchCastById(id).then(setCast);
  }, [id]);
  console.log('useFetchCast ', cast);
  return cast;
};
