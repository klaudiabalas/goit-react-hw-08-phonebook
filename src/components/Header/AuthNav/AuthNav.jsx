import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <nav className={css.navigation}>
      <div className={css.link}>
        <NavLink to="/register">Register</NavLink>
      </div>
      <div className={css.link}>
        <NavLink to="/login">Log In</NavLink>
      </div>
    </nav>
  );
};
