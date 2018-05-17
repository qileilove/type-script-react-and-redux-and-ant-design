import * as React from 'react';
import './App.css';
import AddTodoButton from './containers/AddTodoButtonContainer';
import TodoList from './containers/TodoListContainer';

class App extends React.Component {
  public render() {
    return (
      <div>
        <AddTodoButton />
        <TodoList />
    </div>
    );
  }
}

export default App;
