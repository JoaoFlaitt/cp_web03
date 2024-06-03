import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { getPopularMovies, getUpcomingMovies } from '../api';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const popular = await getPopularMovies();
      const upcoming = await getUpcomingMovies();
      setPopularMovies(popular);
      setUpcomingMovies(upcoming);
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <MovieList title="Popular Movies" movies={popularMovies} />
      <MovieList title="Upcoming Movies" movies={upcomingMovies} />
    </div>
  );
};

export default Home;