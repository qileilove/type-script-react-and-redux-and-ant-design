import { connect, Dispatch } from 'react-redux';
import { TodoAction } from '../../actions/Todo/TodoAction'
import { toggleTodo, deleteTodo } from "../../actions/Todo/TodoActionCreator";
import TodoList from "../../components/TodoList/TodoList";
import { Todos } from '../../states/Todo/TodosState';

interface IStateFromProps {
  todos: Todos
}

interface IDispatchFromProps {
  onTodoClick: (id: number) => void
  onDelete: (id: number) => void
}

function mapStateToProps(state: Todos): IStateFromProps {
  return {
    todos: state
  };
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): IDispatchFromProps {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id))
    },
    onDelete: (id: number) => {
      dispatch(deleteTodo(id))
    }
  }
}

export default connect<IStateFromProps, IDispatchFromProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);