import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HavenLogoWhite from '../assets/HavenW.png';

interface NavPage {
  name: string;
  path: string;
}

const navPages: NavPage[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Our Platform',
    path: '/platform',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

const getNavItems = (): JSX.Element => {
  const { pathname } = useLocation();
  return (
    <>
      {navPages.map((page) => {
        const isActive = page.path === pathname;
        return (
          isActive ? (
            <li key={page.name}>
              <Link
                to={page.path}
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                {page.name}
              </Link>
            </li>
          ) : (
            <li key={page.name}>
              <Link to={page.path} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{page.name}</Link>
            </li>
          )
        );
      })}
    </>
  );
};

export default function Nav() {
  return (
    <nav className="px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={HavenLogoWhite} alt="Haven" className="h-6 mr-3 sm:h-9" />
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open nav menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-row justify-between">
            {getNavItems()}
          </ul>
        </div>
      </div>
    </nav>
  );
}
