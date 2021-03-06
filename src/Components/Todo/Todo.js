import PropTypes from 'prop-types'
import { ImBin } from "react-icons/im";
import styles from './Todo.module.css'

export default function Todo({text, completed, onToggleCompleted, onDelete}) {
    return (
  <>
    <input
      type="checkbox"
      className={styles.TodoItem}
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className={styles.TodoText}>{text}</p>
    <button type="button" className={styles.TodoBtn} onClick={onDelete}>
      <ImBin/>
    </button>
  </>
    )
}

Todo.propTypes = {
    text: PropTypes.string,
    onToggleCompleted: PropTypes.func,
    onDelete: PropTypes.func,
    completed: PropTypes.bool,
}