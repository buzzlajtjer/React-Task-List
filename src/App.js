import React, { Component } from "react";
import "./App.css";
import Todos from "./components/todos";
import AddTodos from "./components/addTodo";
import DeleteAllTodos from "./components/deleteAllTodos";

class App extends Component {
  state = {
    todos: []
  };

  handleCheck = id => {
    console.log(id, "checked");
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  handleDelete = id => {
    console.log(id, "deleted");
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  };

  handleAddTodo = () => {
    console.log("Todo Added");
    const newTodos = [...this.state.todos];
    const input = document.getElementById("input-add");

    if (input.value === "" || input.value === null) {
      input.style = "border: 1px solid red";
      return null;
    } else {
      input.style = "border: 1px solid black";
      newTodos.push({
        id: Math.floor(Math.random() * 9999),
        title: input.value,
        completed: false
      });
      input.value = "";
    }

    input.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        document.getElementById("add-btn").click();
      }
    });

    this.setState({ todos: newTodos });
    console.log(newTodos);
  };

  handleDeleteAll = () => {
    console.log("Everything deleted");
    const noTodos = [];
    this.setState({ todos: noTodos });
  };

  render() {
    return (
      <div>
        <h1 className="header-text">Daily Tasks {this.state.todos.length}</h1>
        <AddTodos handleAddTodo={this.handleAddTodo} />
        <Todos
          todos={this.state.todos}
          handleCheck={this.handleCheck}
          handleDelete={this.handleDelete}
        />
        <DeleteAllTodos
          handleDeleteAll={this.handleDeleteAll}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
