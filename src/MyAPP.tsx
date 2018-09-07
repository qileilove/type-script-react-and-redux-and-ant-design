import * as React from 'react';
import { Provider, Store } from 'react-redux'
import { createStore } from 'redux';
import todos from './reducers/Todos/todos';
import { Todos } from './states/Todo/TodosState'
import Routes from "./Routes"

const store: Store<Todos> = createStore(todos, []);


export class MyApp extends React.Component {
    public render() {
      return (
        <Provider store={store}>
            
            <Routes />

        </Provider>
      )
    }
  }
  
  export default MyApp
  