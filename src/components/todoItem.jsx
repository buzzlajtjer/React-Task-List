import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getCheckedStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  getEmptyListStyle = () => {
    return {
      borderBottom: this.props.todos.length === 1 ? "0px" : "1px #fff solid"
    };
  };

  render() {
    const { handleCheck, handleDelete } = this.props;
    const { title, id } = this.props.todo;

    return (
      <div className="todo-wrapper" style={this.getEmptyListStyle()}>
        <input type="checkbox" onChange={handleCheck.bind(this, id)} />
        <p id="task-title" style={this.getCheckedStyle()}>
          {title}
        </p>
        <button className="btn-del" onClick={handleDelete.bind(this, id)}>
          Delete
        </button>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
