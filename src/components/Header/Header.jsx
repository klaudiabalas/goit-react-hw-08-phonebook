import { useAuth } from '../../hooks/useAuth';
import { AuthNav } from './AuthNav/AuthNav';
import css from './Header.module.css';
import { Nav } from './Nav/Nav';
import { UserMenu } from './UserMenu/UserMenu';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Nav />
      {isLoggedIn ? (
        <div className={css.header_logged}>
          <UserMenu />
        </div>
      ) : (
        <div>
          <AuthNav />
        </div>
      )}
    </header>
  );
};
