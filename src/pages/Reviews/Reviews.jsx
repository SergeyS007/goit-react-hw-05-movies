import * as SC from './Review.styled';
import { useFetchReviews } from 'Hooks/UseFetchReviews';

const Reviews = () => {
  const reviews = useFetchReviews();
  console.log(reviews);

  return (
    <>
      {reviews && reviews.results.length > 0 ? (
        <ul>
          {reviews.results.map(review => (
            <SC.Li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </SC.Li>
          ))}
        </ul>
      ) : (
        <div>There are no reviews</div>
      )}
    </>
  );
};

export default Reviews;
