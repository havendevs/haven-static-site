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
  const baseLinkClass = 'block flex-none';
  return (
    <>
      {navPages.map((page) => {
        const isActive = page.path === pathname;
        return (
          isActive ? (
            <li key={page.name}>
              <Link
                to={page.path}
                className={`${baseLinkClass} py-3 pl-3 pr-4 text-white bg-blue-700 rounded md:mx-5 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white`}
              >
                {page.name}
              </Link>
            </li>
          ) : (
            <li key={page.name}>
              <Link to={page.path} className={`${baseLinkClass} py-2 pl-3 pr-4 text-gray-700 rounded md:mx-5 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>{page.name}</Link>
            </li>
          )
        );
      })}
    </>
  );
};

export default function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false);
  const hamburgerLine = 'h-1 w-6 my-1 rounded-full bg-gray-300 transition ease transform duration-300';

  return (
    <nav className="fixed flex flex-wrap items-center justify-between px-2 sm:px-4 py-2.5 bg-slate-500 mb-3 w-full shadow-lg">
      <div className="container flex flex-wrap items-center md:justify-between mx-auto">
        <button type="button" className="flex flex-col h-12 w-12 rounded justify-center items-center group md:hidden" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
          <span className="sr-only">Toggle nav menu</span>
          <div className={`${hamburgerLine} ${hamburgerOpen ? 'rotate-45 translate-y-3' : ''}`} />
          <div className={`${hamburgerLine} ${hamburgerOpen ? 'opacity-0' : ''}`} />
          <div className={`${hamburgerLine} ${hamburgerOpen ? '-rotate-45 -translate-y-3' : ''}`} />
        </button>
        <Link to="/" className="flex justify-start md:w-auto md:static md:block md:justify-start">
          <img src={HavenLogoWhite} alt="Haven" className="h-9 ml-2 mr-3 md:h-9" />
        </Link>
        <div className={`w-full md:w-auto md:flex items-center ${(hamburgerOpen ? ' flex' : ' hidden')}`} id="navbar-default">
          <ul className="flex flex-row justify-around list-none mt-3 mx-auto md:ml-auto">
            {getNavItems()}
          </ul>
        </div>
      </div>
    </nav>
  );
}
