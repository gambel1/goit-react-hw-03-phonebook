import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import React from 'react';
export default class App extends React.Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      // { id: 'id-5', name: 'Albina Potapenko', number: '568-25-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsLocalStorage = localStorage.getItem('contacts');
    const parseContactsLocalStorage = JSON.parse(contactsLocalStorage);
    console.log(parseContactsLocalStorage);
    if (parseContactsLocalStorage) {
      this.setState({ contacts: parseContactsLocalStorage });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновилось поле Контакты');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = event => {
    this.setState(({ contacts }) =>
      contacts.find(
        contact => contact.name.toLowerCase() === event.name.toLowerCase()
      )
        ? alert(`${event.name} is already in contacts`)
        : { contacts: [event, ...contacts] }
    );
  };

  filterContact = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  deleteFilterContactId = nameId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== nameId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.handleChange} />
        <h2>Contacts</h2>
        <Filter filterValue={filter} filterContact={this.filterContact} />
        <ContactsList
          deleteContacts={this.deleteFilterContactId}
          filteredContacts={filteredContacts}
        />
      </div>
    );
  }
}
