import PropTypes from 'prop-types'
import { ImBin } from "react-icons/im";

export default function Todo({text, completed, onToggleCompleted, onDelete}) {
    return (
  <>
    <input
      type="checkbox"
      className=""
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className="">{text}</p>
    <button type="button" className="" onClick={onDelete}>
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