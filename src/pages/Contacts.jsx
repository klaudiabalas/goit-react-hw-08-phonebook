import { useSelector } from 'react-redux';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { selectError } from '../redux/selectors/selectors';

const Contacts = () => {
  const error = useSelector(selectError);
  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList error={error} />
      </div>
    </div>
  );
};

export default Contacts;
