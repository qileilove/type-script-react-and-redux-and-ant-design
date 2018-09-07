import * as React from 'react';
import './App.css';
import AddTodoButton from './containers/AddTodoButton/AddTodoButtonContainer';
// import TodoList from './containers/TodoList/TodoListContainer';

export  class AppPage extends React.Component {
  public render() {
    return (
      <div>
        <AddTodoButton />
        {/* <TodoList /> */}
    </div>
    );
  }
}

