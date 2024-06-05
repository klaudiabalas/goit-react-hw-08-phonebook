import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import { logOut } from '../../../redux/operactions/login';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.container}>
      <p className={css.paragraph}>Welcome, {user.name}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
