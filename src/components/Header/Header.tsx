import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { overLinks, userLinks } from './data';

const Header: FC = () => {
  const [isAuth, setAuth] = useState(false);
  const [links, setLinks] = useState(overLinks);

  useEffect(() => {
    setAuth(true);

    if (isAuth) {
      setLinks(userLinks);
    }
  }, [isAuth]);

  return (
    <header className="sm:flex hidden px-2 border-b  items-center justify-between">
      <Link className="uppercase font-bold text-purple-800" to="/">
        webDev
      </Link>
      <nav className="flex items-center">
        <ul className="text-gray-500 font-semibold inline-flex items-center">
          {links.map(({ name, linkTo }) => (
            <li
              key={name}
              className="inline-block py-6 px-2 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-400"
            >
              <Link to={linkTo}>{name}</Link>
            </li>
          ))}
        </ul>
        <ul className="inline-flex items-center">
          <li>
            <Link
              to="/auth"
              className="ml-2 py-1 px-3 border-2 rounded-full border-indigo-600 text-indigo-600 hover:text-white hover:bg-indigo-800"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="ml-2 shadow-md shadow-indigo-300 py-1 px-3 border-2 rounded-full border-indigo-600 text-indigo-600 hover:text-white hover:bg-indigo-800"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
