import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/api';
import { useLocation } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [imageList, setImageList] = useState([]);
  const location = useLocation();

  // useEffect(() => {
  //   async function getImages() {
  //     const data = await fetchMovies();

  //     console.log('imageList ', imageList);
  //     const imageListString = imageList.join('');
  //     const dataString = data.results.join('');
  //     if (imageListString === dataString) {
  //       return;
  //     }
  //     setImageList([...data.results]);
  //   }
  //   getImages();
  // }, [imageList]);

  useEffect(() => {
    fetchMovies().then(setImageList);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={imageList} location={location} />
      {/* <img src="https://via.placeholder.com/960x240" alt="" /> */}
    </div>
  );
};

export default Home;
