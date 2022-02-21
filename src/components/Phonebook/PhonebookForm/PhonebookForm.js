import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './PhonebookForm.module.css';

class PhonebookForm extends Component {
  static defaultProps = {
    initialInputName: '',
    initialInputNumber: '',
  };

  state = {
    name: this.props.initialInputName,
    number: this.props.initialInputNumber,
  };

  onInputChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  addContactTo = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const generateNameId = nanoid();
    const generateNumberId = nanoid();

    return (
      <form className={styles.Form} onSubmit={this.addContactTo}>
        <label className={styles.Label}>
          Name:
          <input
            className={styles.Input}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter demon name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={generateNameId}
            onChange={this.onInputChange}
            required
          />
        </label>

        <label className={styles.Label}>
          Number:
          <input
            className={styles.Input}
            type="tel"
            name="number"
            placeholder="000-0-000"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={generateNumberId}
            onChange={this.onInputChange}
            required
          />
        </label>
        <button className={styles.Button} type="submit">
          Add new contact
        </button>
      </form>
    );
  }
}

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PhonebookForm;
