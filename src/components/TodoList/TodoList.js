import React, { Component } from "react";

import "./todoList.css";
//import TodoForm from "../TodoForm/TodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["hi"],
      inputValue: "",
    };
  }
  // deleteTodo = (e) => {
  //   const deleteTodos = this.state.todos.filter(function (todos) {
  //     return todos.key !== e;
  //   });

  //   this.setState({
  //     todos: deleteTodos,
  //   });
  //   console.log("encounter");
  // };
  renderTodoList = () => {
    const currentTodo = this.state.todos;
    const SingleTodo = (todo) => {
      return (
        <li key={todo}>
          <input type="checkbox" className="checkmark" />
          {todo}
          {/* <button className="delete" onClick={this.deleteTodo(todo.key)}>
            X
          </button> */}
        </li>
      );
    };
    const myTodos = currentTodo.map(SingleTodo);
    return myTodos;
  };
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  addTodo = () => {
    // const NewTodo = {
    //    id: Math.random(),
    //   value: this.state.inputValue,
    // };
    const currentTodo = this.state.todos;

    this.setState({
      todos: [...currentTodo, this.state.inputValue],
      key: this.state.key,
      inputValue: "",
    });
    console.log(currentTodo);
  };

  render() {
    return (
      <div className="todoListMain">
        <div className="form">
          <input
            className="input-box"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="What do you want to add?"
          />
          <button className="addBtn" onClick={this.addTodo}>
            ADD
          </button>
        </div>
        <hr />
        <ul className="list">{this.renderTodoList()}</ul>
      </div>
    );
  }
}

export default TodoList;
