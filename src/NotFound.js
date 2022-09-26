import React from 'react';
import { Link } from 'react-router-dom';
import err from './img/404.webp';

const NotFound = () => (
  <div className="relative pt-20 bg-gradient-to-r from-gray-500 to-gray-900">
    <img
      src={err}
      alt="404-error"
      className="w-full h-screen top-0 object-cover absolute mix-blend-overlay"
    />
    <Link className="w-40 font-extrabold text-4xl hover:text-red-600 absolute top-4 right-60 text-white" to="/">Go Home</Link>
  </div>
);

export default NotFound;
