import React, { Component } from 'react';


class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button onClick={() => deleteContact(contact.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;