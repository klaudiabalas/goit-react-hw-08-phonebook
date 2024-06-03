import { useDispatch } from 'react-redux';
import { register } from '../../redux/operactions/login';

import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <div className={css.container}>
        <label htmlFor="register-name">Username</label>
        <input type="text" name="name" id="register-name" />
      </div>
      <div className={css.container}>
        <label htmlFor="register-email">Email</label>
        <input type="text" name="email" id="register-email" />
      </div>
      <div className={css.container}>
        <label htmlFor="register-password">Password</label>
        <input type="text" name="password" id="register-password" />
      </div>
      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
};

export default Register;
