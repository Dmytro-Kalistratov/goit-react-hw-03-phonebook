import styles from './PhonebookListItem.module.css';

const PhonebookListItem = props => {
  const { name, number } = props;
  return (
    <p className={styles.Info}>
      {name}: {number}
    </p>
  );
};
export default PhonebookListItem;
