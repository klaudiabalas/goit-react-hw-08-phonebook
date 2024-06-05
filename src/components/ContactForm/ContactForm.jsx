import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operactions/contacts';
import css from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const formSubmit = async evt => {
    evt.preventDefault();

    const name = evt.target.name.value;
    const number = evt.target.number.value;

    console.log(evt);

    const newContact = {
      name,
      number,
    };

    try {
      await dispatch(addContact(newContact)).unwrap();
      evt.target.reset();
      if (onSubmit) {
        onSubmit();
      }
    } catch (error) {
      console.error('Failed to add contact:', error);
    }
  };

  return (
    <div className={css.phonebook_container}>
      <h2 className={css.phonebook_header}>Phonebook</h2>
      <form className={css.form} onSubmit={formSubmit}>
        <label className={css.form_label}>Name</label>
        <input
          type="text"
          name="name"
          className={css.form_input}
          placeholder="Enter name"
          required
        />
        <label className={css.form_label}>Phone</label>
        <input
          type="tel"
          name="number"
          className={css.form_input}
          placeholder="Enter phone number"
          required
        />
        <button className={css.form_button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
