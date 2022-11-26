import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from '../services/api';

export const useFetchReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchReviewsById(id).then(setReviews);
  }, [id]);
  console.log('useFetchReviews ', reviews);
  return reviews;
};
