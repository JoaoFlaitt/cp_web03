import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { getMovieDetails } from '../api';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full md:w-1/3 h-auto rounded-lg" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-semibold">{movie.title}</h1>
          <p className="text-gray-600 my-4">{movie.overview}</p>
          <div className="flex items-center">
            <FaStar className="text-yellow-500" />
            <span className="ml-2">{movie.vote_average}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;