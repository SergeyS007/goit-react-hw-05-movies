import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/api';
// import { useLocation } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [imageList, setImageList] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    fetchMovies().then(setImageList);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={imageList} />
    </div>
  );
};

export default Home;
