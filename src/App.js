import React, { Component } from "react";
import "./App.css";
import Todos from "./components/todos";
import AddTodos from "./components/addTodo";

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
    let theLength = newTodos.length;
    let inc = theLength++;
    if (input.value === "" || input.value === null) {
      input.style = "border: 1px solid red";
    } else {
      input.style = "border: 1px solid black";
      newTodos.push({
        id: inc,
        title: input.value,
        completed: false
      });
      input.value = "";
    }
    this.setState({ todos: newTodos });
    console.log(newTodos);
  };

  render() {
    return (
      <div>
        <h1 className="header-text">Daily Tasks</h1>
        <AddTodos handleAddTodo={this.handleAddTodo} />
        <Todos
          todos={this.state.todos}
          handleCheck={this.handleCheck}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
