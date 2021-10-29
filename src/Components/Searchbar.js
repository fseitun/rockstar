import { NavLink, Outlet } from 'react-router-dom';
import './Searchbar.css';

export function Searchbar() {
  return (
    <>
      <nav>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'link is-active' : 'link')}
            to="/discover"
          >
            Discover
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'link is-active' : 'link')}
            to="/movie-details"
          >
            Detail
          </NavLink>
        </li>
      </nav>
      <Outlet />
    </>
  );
}
