import { useSelector } from 'react-redux';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { selectError } from '../../redux/selectors/selectors';

import css from './Contacts.module.css';

const Contacts = () => {
  const error = useSelector(selectError);
  return (
    <div>
      <div>
        <div className={css.container}>
          <ContactForm />
          <Filter />
        </div>
        <ContactList error={error} />
      </div>
    </div>
  );
};

export default Contacts;
