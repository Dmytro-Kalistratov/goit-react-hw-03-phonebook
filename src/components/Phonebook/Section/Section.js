import PropTypes from 'prop-types';
import styles from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={styles.Section}>
      <h2 className={styles.Section__title}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
