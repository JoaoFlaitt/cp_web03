import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-gray-600">{movie.overview}</p>
        <Link to={`/movie/${movie.id}`} className="text-indigo-600 hover:text-indigo-800 mt-2 block">Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;
