import PropTypes from 'prop-types';
import styles from './PhonebookFilter.module.css';

const PhonebookFilter = props => {
  const { value, onChange } = props;
  return (
    <label className={styles.Label}>
      Who you gonna call?
      <input
        className={styles.Input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

PhonebookFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PhonebookFilter;
