import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout.jsx';

const Home = lazy(() => import('../pages/Home/Home.jsx'));
const Cast = lazy(() => import('pages/Cast/Cast.jsx'));
const Reviews = lazy(() => import('pages/Reviews/Reviews.jsx'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const MovieSearch = lazy(() => import('pages/MovieSearch/MovieSearch.jsx'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<MovieSearch />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export default App;

// Ключ API (v3 auth)
// eef58e7402eb4560bd5a271abcaa31e6

// Пример API-запроса
// https://api.themoviedb.org/3/movie/550?api_key=eef58e7402eb4560bd5a271abcaa31e6
// Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWY1OGU3NDAyZWI0NTYwYmQ1YTI3MWFiY2FhMzFlNiIsInN1YiI6IjYzNzU0ZjRmNzJkODU1MDA5YjQ0YTJiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v43xJAwD7SmTPmhlv-e2qoJreVMKOOUyJcAfZ16Q34Y
