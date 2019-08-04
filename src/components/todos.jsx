import React, { Component } from "react";
import TodoItem from "./todoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <TodoItem
            handleCheck={this.props.handleCheck}
            handleDelete={this.props.handleDelete}
            key={todo.id}
            todo={todo}
            todos={this.props.todos}
          />
        ))}
      </div>
    );
  }
}

//PropTypes

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
