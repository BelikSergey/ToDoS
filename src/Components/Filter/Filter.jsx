import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={styles.Filter}>
    <p className={styles.FilterTitle}>Фильтр по содержимому</p>
    <input
      type="text"
      className={styles.FilterInput}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Filter;