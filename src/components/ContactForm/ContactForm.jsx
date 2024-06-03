import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const formSubmit = evt => {
    evt.preventDefault();

    const name = evt.target.name.value;
    const phone = evt.target.phone.value;

    const newContact = {
      name,
      phone,
    };

    dispatch(addContact(newContact));
    evt.target.reset();
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
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          required
        />
        <label className={css.form_label}>Phone</label>
        <input
          type="tel"
          name="phone"
          className={css.form_input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
