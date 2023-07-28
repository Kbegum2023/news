import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Layout = (props) => {
   return (
    <div>
      <div className="bg-slate-950 p-4 flex flex-wrap justify-between items-center">
        <Link to="/">
          <button className="px-4 py-2 text-white rounded-md text-xl">
            Daily Digest
          </button>
        </Link>
        <ul className="flex space-x-4 mt-4 justify-center sm:mt-0 sm:justify-end">
          <li className="text-white">
            <NavLink
              to="/"
              exact={true}
              className="hover:underline cursor-pointer"
            >
              Home
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink
              to="/business"
              exact={true}
              className="hover:underline cursor-pointer"
            >
              Business
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink
              to="/politics"
              exact={true}
              className="hover:underline cursor-pointer"
            >
              Politics
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink
              to="/technology"
              exact={true}
              className="hover:underline cursor-pointer"
            >
              Technology
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink
              to="/lifestyle"
              exact={true}
              className="hover:underline cursor-pointer"
            >
              Lifestyle
            </NavLink>
          </li>
        </ul>
      </div>

      {props.children}
    </div>
  );
};

export default Layout;