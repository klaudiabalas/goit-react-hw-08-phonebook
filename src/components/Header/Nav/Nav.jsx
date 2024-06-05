import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import css from './Nav.module.css';

export const Nav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</div>
    </nav>
  );
};
