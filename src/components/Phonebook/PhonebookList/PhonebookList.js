import PropTypes from 'prop-types';
import PhonebookListItem from './PhonebookListItem';
import styles from './PhonebookList.module.css';

const PhonebookList = props => {
  const { contacts, onDeleteContact } = props;
  return (
    <ul className={styles.List}>
      {contacts.map(contact => (
        <li className={styles.List__Item} key={contact.id}>
          <PhonebookListItem name={contact.name} number={contact.number} />
          <button
            className={styles.Button}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default PhonebookList;
