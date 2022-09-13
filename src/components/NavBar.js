import React from 'react';
import { Link } from 'react-router-dom';
import { Hamburger } from '../Icons';

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 px-12 lg:px-24 py-4 flex justify-between items-center shadow bg-transparent z-50">
      <div className="text-4xl font-bold text-blue-500">Logo</div>
      <button
        type="button"
        className="inline-block lg:hidden"
        onClick={() => handleOpen()}
      >
        <Hamburger />
      </button>
      <ul
        className={
          open
            ? 'block fixed left-0 right-0 top-16 text-center transition-all delay-150 ease-in-out z-50 bg-blue-500 opacity-80 px-4 py-2'
            : 'hidden gap-4 items-center lg:flex'
        }
      >
        <li className="transition-all ease-in delay-75 hover:-translate-y-1">
          <Link to="/" className="text-white lg:text-blue-500 no-underline z-50" onClick={() => setOpen()}>Home</Link>
        </li>
        <li className="transition-all ease-in delay-75 hover:-translate-y-1">
          <Link to="/todos" className="text-white lg:text-blue-500 no-underline z-50" onClick={() => setOpen()}>Todos</Link>
        </li>
        <li className="transition-all ease-in delay-75 hover:-translate-y-1">
          <Link to="/contact" className="text-white lg:text-blue-500 no-underline z-50" onClick={() => setOpen()}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;