import React, { Component } from 'react';
import Form from './Form';
import ToCheck from './ToCheck';
import 'firebase/database';

class ToDos extends Component {
  state = {
    todos: [],
  };

  addToDo = (todo) => {
    const newToDo = [todo, ...this.state.todos]
    this.setState({
      todos: newToDo
    })
  }

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          //it updates the todo
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    return (
      <div >
        <Form onSubmit={this.addToDo} />
        {this.state.todos.map(todo => (
          <ToCheck
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div className="toDoLeft"> To Dos Left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
      </div>
    )
  }
}

export default ToDos;