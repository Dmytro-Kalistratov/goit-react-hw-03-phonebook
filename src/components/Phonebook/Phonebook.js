import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import PhonebookForm from './PhonebookForm';
import PhonebookList from './PhonebookList';
import PhonebookFilter from './PhonebookFilter';
import { nanoid } from 'nanoid';

class Phonebook extends Component {
  static defaultProps = {
    initialContacts: [
      {
        id: 'id-1',
        name: 'Justice the Awesome Demon',
        number: '666-0-066',
      },
      { id: 'id-2', name: 'Lucifer the CEO of Hell', number: '999-1-111' },
      {
        id: 'id-3',
        name: 'Pandemonica the Tired Demon',
        number: '000-0-000',
      },
      { id: 'id-4', name: 'The Helltaker', number: '969-0-001' },
    ],
    initialFilter: '',
  };

  static propTypes = {
    initialContacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    initialFilter: PropTypes.string.isRequired,
  };

  state = {
    contacts: this.props.initialContacts,
    filter: this.props.initialFilter,
  };

  onformSubmit = data => {
    const generateContactsId = nanoid();
    const finderNormalize = data.name.toLowerCase();

    this.setState(prevState => {
      return prevState.contacts.find(contact => {
        return contact.name.toLowerCase() === finderNormalize;
      })
        ? alert('This Demon already added! Try another one ~')
        : {
            contacts: [
              ...prevState.contacts,
              {
                id: generateContactsId,
                name: data.name,
                number: data.number,
              },
            ],
          };
    });
  };

  onFilterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    const filterNormalize = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filterNormalize) ||
        contact.number.includes(filterNormalize)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <Section title="The Hell Phonebook">
          <PhonebookForm
            initialInputName="Malina the Sour Demon"
            initialInputNumber="333-9-333"
            onSubmit={this.onformSubmit}
          />
        </Section>
        <Section title="Your Demon List">
          <PhonebookFilter value={filter} onChange={this.onFilterChange} />
          <PhonebookList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContacts}
          />
        </Section>
      </>
    );
  }
}

export default Phonebook;
