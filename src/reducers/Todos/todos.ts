import { TodoAction, TodoActionType } from "../../actions";
import { Todos } from "../../states/Todo/TodoState";

function todos(state: Todos, action: TodoAction): Todos {
  switch(action.type) {
   case TodoActionType.ADD_TODO:
    return [
      ...state,
      {
        completed: false,
        id: action.id,
        text: action.text
      }
    ];
  case TodoActionType.TOGGLE_TODO:
    return state.map(todo => 
      (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
    );
  case TodoActionType.DELETE_TODO:
    return state.filter(todo => todo.id !== action.id);
  default: 
    return state;
 }
}

export default todos;