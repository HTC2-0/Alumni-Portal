import React from 'react';
import { Link } from 'react-router-dom';
import College from '../assets/Collge.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg relative top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Image */}
          <div>
            <Link to="/home"><img src={College} alt="College Logo" className="h-12 w-auto" /></Link>
          </div>
          {/* Links */}
          <div className="flex items-center">
            <Link to="/about"><p className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</p></Link>
            <Link to="/alumni"><p className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Alumni</p></Link>
            <Link to="/events"><p className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Events</p></Link>
            <Link to="/gallary"><p className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Gallery</p></Link>
            <Link to="/profile"><p className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Profile</p></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
