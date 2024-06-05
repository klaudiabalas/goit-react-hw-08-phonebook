import { useAuth } from '../../hooks/useAuth';
import { AuthNav } from './AuthNav/AuthNav';
import css from './Header.module.css';
import { Nav } from './Nav/Nav';
import { UserMenu } from './UserMenu/UserMenu';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <div className={css.header}>
        <div className={css.link}>
          <Nav />
        </div>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
