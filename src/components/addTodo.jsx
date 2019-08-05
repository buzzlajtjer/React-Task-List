import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <div className="add-wrapper">
        <input type="text" id="input-add" />
        <button
          id="add-btn"
          className="btn-add"
          onClick={this.props.handleAddTodo}
        >
          Add Task
        </button>
      </div>
    );
  }
}

export default AddTodo;
