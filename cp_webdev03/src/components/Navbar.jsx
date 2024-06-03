import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">Movie Portal</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/series" className="text-gray-300 hover:text-white">Series</Link>
          <Link to="/upcoming" className="text-gray-300 hover:text-white">Upcoming</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;