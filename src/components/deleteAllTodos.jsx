import React, { Component } from "react";

class DeleteAllTodos extends Component {
  getStyle = () => {
    return {
      visibility: this.props.todos.length < 1 ? "hidden" : "visible"
    };
  };
  render() {
    return (
      <div className="del-all-wrapper" style={this.getStyle()}>
        <button
          className="btn-del btn-margin-top"
          onClick={this.props.handleDeleteAll}
        >
          Delete All Tasks
        </button>
      </div>
    );
  }
}

export default DeleteAllTodos;
