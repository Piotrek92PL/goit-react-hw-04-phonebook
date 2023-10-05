import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

function ContactForm({ contacts, addContact }) {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = formData;

    if (name.trim() === '' || number.trim() === '') {
      return; // Nie dodawaj pustych kontaktów
    }

    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicateName) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    addContact(newContact);

    setFormData({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label>
        Dodaj nowy kontakt:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Numer telefonu:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={formData.number}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Dodaj</button>
    </form>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
