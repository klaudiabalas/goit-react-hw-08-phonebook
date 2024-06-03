import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors/selectors';
import { setFilter } from '../../redux/slices/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = evt => {
    const value = evt.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filter_container}>
      <h1 className={css.filter_header}>Search contact</h1>
      <input
        type="text"
        name="filter"
        onChange={handleFilter}
        placeholder="Enter name"
        className={css.input_filter}
        value={useSelector(selectFilter)}
      />
    </div>
  );
};

export default Filter;
