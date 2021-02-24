import React, { Component } from 'react';
import styles from './TodoEditor.module.css'
import { RiSave3Line } from "react-icons/ri";

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = event => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className={styles.TodoEditor} onSubmit={this.handleSubmit}>
        <textarea
          className={styles.TodoEditorTextarea}
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className={styles.TodoEditorButton}>
          <RiSave3Line/>
        </button>
      </form>
    );
  }
}

export default TodoEditor;