import { connect, Dispatch } from 'react-redux';
import { TodoAction } from '../../actions/Todo/TodoAction'
import { addTodo } from '../../actions/Todo/TodoActionCreator';
import AddButton, { IAddTodoButtonProps } from '../../components/AddTodoButton/AddTodoButton';
import { Todos } from '../../states/Todo/TodosState';

function mapStateToProps(state: Todos): {} {
  return {} //新規生成のみなので、Propsには何も混ぜ込まない
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): IAddTodoButtonProps {
  return {
    onSubmit: (s: string) => {
      dispatch(addTodo(s));
    }
  };
}

export default connect<{}, IAddTodoButtonProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);