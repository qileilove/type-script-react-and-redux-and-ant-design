import { connect, Dispatch } from 'react-redux';
import { addTodo, TodoAction } from '../../actions';
import AddButton, { IAddTodoButtonProps } from '../../components/AddTodoButton/AddTodoButton';
import { Todos } from '../../states/TodoState';

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