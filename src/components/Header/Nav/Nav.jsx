import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

export const Nav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
