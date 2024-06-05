import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <h2 className={css.header}>Home page</h2>
      <p className={css.paragraph}>
        Welcome to your own online phonebook! Now you can save phone numbers.
      </p>
    </div>
  );
};

export default Home;
